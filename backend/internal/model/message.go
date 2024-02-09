package model

type Message struct {
	Id       string `json:"id"`
	MemberId string `json:"memberId"`
	Text     string `json:"text"`
}
