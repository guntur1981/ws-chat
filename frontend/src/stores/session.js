import { readonly, ref } from "vue";
import { defineStore } from "pinia";
import { useMemberStore } from "stores/member";
import { useMessageStore } from "stores/message";

export const useSessionStore = defineStore("session", () => {
  const member = useMemberStore();
  const message = useMessageStore();

  const baseUrl = "ws://127.0.0.1:3000/ws";
  const conn = ref(null);
  const joined = ref(false);
  const memberId = ref("");

  // non reactive
  let memberName = "";
  let memberLocation = "";
  let memberPhoto = "";

  function join(name, location, photo) {
    if (conn.value) return;

    memberName = name;
    memberLocation = location;
    memberPhoto = photo;

    conn.value = new WebSocket(baseUrl);
    conn.value.onclose = onCloseConnection;
    conn.value.onmessage = onIncomingMessage;
    conn.value.onopen = onOpenConnection;

    conn.value.onerror = (evt) => console.log("websocket error:", evt);
  }

  function leave() {
    if (!conn.value) return;
    const payload = { kind: "leave" };
    conn.value.send(JSON.stringify(payload));
  }

  function onCloseConnection() {
    joined.value = false;
    memberId.value = "";
    conn.value = null;
  }

  function onIncomingMessage(evt) {
    const payload = JSON.parse(evt.data);
    // console.log(payload);

    switch (payload.kind) {
      // payload = {
      //   kind: "join",
      //   member: Object(member),
      // }
      case "join":
        member.addMember(payload.member);
        message.addInfo(`${payload.member.name} joined the chat.`);
        break;

      // payload = {
      //   kind: "leave",
      //   member: Object(member),
      // }
      case "leave":
        member.removeMember(payload.member.id);
        message.addInfo(`${payload.member.name} left the chat.`);
        break;

      // payload = {
      //   kind: "message",
      //   message: Object(message),
      // }
      case "message":
        message.addMessage(payload.message);
        break;

      // payload = {
      //   kind: "register",
      //   memberId: String,
      //   members: Array(member)
      // }
      case "register":
        memberId.value = payload.memberId;
        member.setAllMembers(payload.members);
        joined.value = true;
        break;
    }
  }

  function onOpenConnection() {
    // register
    const registration = {
      name: memberName,
      location: memberLocation,
      photo: memberPhoto,
    };
    const payload = {
      kind: "join",
      data: JSON.stringify(registration),
    };
    conn.value.send(JSON.stringify(payload));
  }

  function sendMessage(msg) {
    if (!conn.value) return;

    const payload = {
      kind: "message",
      data: msg,
    };
    conn.value.send(JSON.stringify(payload));
  }

  return {
    joined: readonly(joined),
    memberId: readonly(memberId),
    join,
    leave,
    sendMessage,
  };
});
