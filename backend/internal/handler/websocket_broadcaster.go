package handler

import (
	"encoding/json"
	"log"

	"github.com/gofiber/contrib/websocket"
	"github.com/google/uuid"

	"ws-chat/internal/model"
)

type broadcaster struct {
	members map[*websocket.Conn]model.Member
}

func newBroadcaster() *broadcaster {
	b := broadcaster{}
	b.members = make(map[*websocket.Conn]model.Member)

	return &b
}

func (b *broadcaster) broadcast(payload any) {
	for conn, mbr := range b.members {
		err := conn.WriteJSON(payload)
		if err != nil {
			log.Println("broadcast to memberid:", mbr.Id, ", error writing json:", err)
		}
	}
}

func (b *broadcaster) getAllMembers() []model.Member {
	result := make([]model.Member, len(b.members))
	idx := 0
	for _, member := range b.members {
		result[idx] = member
		idx++
	}

	return result
}

func (b *broadcaster) memberJoin(c *websocket.Conn, data []byte) {
	member := model.Member{}
	err := json.Unmarshal(data, &member)
	if err != nil {
		log.Println("memberjoin error unmarshalling message:", err)
		return
	}
	// generate member id
	member.Id = uuid.NewString()
	log.Println(member.Name, "join the chat.")

	// broadcast the new member
	payload := map[string]any{
		"kind":   "join",
		"member": member,
	}
	b.broadcast(payload)

	// add member to broadcaster
	b.members[c] = member

	// reply new joiner with generated id and all members
	replyPayload := map[string]any{
		"kind":     "register",
		"memberId": member.Id,
		"members":  b.getAllMembers(),
	}
	err = c.WriteJSON(replyPayload)
	if err != nil {
		log.Println("memberjoin error writing json:", err)
	}

}

func (b *broadcaster) memberLeave(c *websocket.Conn) {
	member, ok := b.members[c]
	if ok {
		log.Println(member.Name, "leave the chat.")
		// delete member in broadcaster
		delete(b.members, c)

		// broadcast the member who is leaving
		payload := map[string]any{
			"kind":   "leave",
			"member": member,
		}
		b.broadcast(payload)
	}

	// close client connection
	c.WriteMessage(websocket.CloseMessage, []byte{})
	c.Close()
}

func (b *broadcaster) memberMessage(c *websocket.Conn, data []byte) {
	// get the member
	member, ok := b.members[c]
	if !ok {
		log.Println("membermessage error unknown member")
	}

	message := model.Message{
		MemberId: member.Id,
		Text:     string(data),
	}

	// broadcast the new message
	payload := map[string]any{
		"kind":    "message",
		"message": message,
	}
	b.broadcast(payload)
}
