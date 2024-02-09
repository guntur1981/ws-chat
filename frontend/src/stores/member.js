import { readonly, ref } from "vue";
import { defineStore } from "pinia";

export const useMemberStore = defineStore("member", () => {
  // member format:
  // {
  //   id: String,
  //   name: String,
  //   location: String,
  //   photo: String,
  // }
  const list = ref([]);

  function addMember(member) {
    list.value.push(member);
  }

  function getMember(id) {
    return list.value.find((m) => m.id === id);
  }

  function removeMember(id) {
    const idx = list.value.findIndex((m) => m.id === id);
    if (idx > -1) list.value.splice(idx, 1);
  }

  function setAllMembers(members) {
    list.value = members;
  }

  return {
    addMember,
    getMember,
    list: readonly(list),
    removeMember,
    setAllMembers,
  };
});
