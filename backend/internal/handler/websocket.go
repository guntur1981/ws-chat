package handler

import (
	"encoding/json"
	"log"

	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
)

// client must send in the following json format
type WsPayload struct {
	Kind string `json:"kind"`
	Data string `json:"data"`
}

func HandleWebsocket(svr *fiber.App) {
	b := newBroadcaster()

	initWebsocket(svr)

	svr.Get("/ws", handleWebsocket(b))
}

func handleWebsocket(b *broadcaster) fiber.Handler {
	return websocket.New(func(c *websocket.Conn) {
		defer b.memberLeave(c)

		for {
			msgType, msg, err := c.ReadMessage()

			if err != nil {
				if websocket.IsCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
					log.Println("handlewebsocket error reading message:", err)
				}
				return
			}

			if msgType != websocket.TextMessage {
				log.Println("received message with type", msgType)
				continue
			}

			p := WsPayload{}
			err = json.Unmarshal(msg, &p)
			if err != nil {
				log.Println("handlewebsocket error unmarshalling message:", err)
				return
			}

			switch p.Kind {
			case "join":
				b.memberJoin(c, []byte(p.Data))
			case "leave":
				b.memberLeave(c)
			case "message":
				b.memberMessage(c, []byte(p.Data))
			}
		}
	})
}

func initWebsocket(svr *fiber.App) {
	svr.Use("/ws", func(c *fiber.Ctx) error {
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})
}
