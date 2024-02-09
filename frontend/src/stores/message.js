import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import { useMemberStore } from "stores/member";
import { v4 as uuidv4 } from "uuid";

export const useMessageStore = defineStore("message", () => {
  const member = useMemberStore();

  // message format:
  // {
  //   id: String (uuid)
  //   memberId: String
  //   memberName: String
  //   memberPhoto: String
  //   text: String
  // }
  const list = ref([
    {
      id: "1",
      memberId: "info",
      text: "Welcome to the websocket chat!",
    },
  ]);
  const newMessage = ref(null);

  function addInfo(text) {
    const info = {
      id: uuidv4(),
      memberId: "info",
      text: text,
    };
    list.value.push(info);
    newMessage.value = info;
  }

  function addMessage(msg) {
    const mbr = member.getMember(msg.memberId);
    const m = {
      id: uuidv4(),
      memberId: msg.memberId,
      memberName: mbr?.name,
      memberPhoto: mbr?.photo,
      text: msg.text,
    };
    list.value.push(m);
    newMessage.value = m;
  }

  return {
    addInfo,
    addMessage,
    list: readonly(list),
    newMessage,
  };
});
