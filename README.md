# Websocket Chat

Just another web chat demo using websocket technology.

## Sequence Diagram

![Sequence Diagram](/ws-chat.png)

## Backend

Built using [Go](https://go.dev/) with [Fiber](https://gofiber.io/) as the web framework

### Run Development

```
cd backend
go run cmd/main.go
```

The frontend is already built in the `/static` folder. After run the backend, just go to http://127.0.0.1:3000 in the web browser.

## Frontend

Built using [Quasar Framework](https://quasar.dev/)

### Run Development

```
cd frontend
quasar dev
```
