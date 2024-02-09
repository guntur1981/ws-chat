package model

type Member struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Location string `json:"location"`
	Photo    string `json:"photo"`
}
