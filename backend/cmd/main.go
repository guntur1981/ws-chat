package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"ws-chat/internal/handler"
)

func main() {
	server := fiber.New()
	server.Static("/", "./static")
	setupCORS(server)

	handler.HandleWebsocket(server)

	log.Fatal(server.Listen(":3000"))
}

func setupCORS(svr *fiber.App) {
	cfg := cors.Config{
		AllowOrigins: "*",
	}
	svr.Use(cors.New(cfg))
}
