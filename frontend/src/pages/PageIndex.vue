<template>
  <q-page>
    <q-scroll-area class="q-px-md" style="height: calc(100svh - 50px - 75px)">
      <div ref="refDivScroll" style="width: 100%">
        <template :key="msg.id" v-for="msg in message.list">
          <q-chat-message
            :avatar="msg.memberPhoto"
            bg-color="blue-grey-2"
            name="Me"
            sent
            :text="[msg.text]"
            v-if="msg.memberId === session.memberId"
          />

          <div v-else-if="msg.memberId === 'info'">
            <q-chip color="info" :label="msg.text" />
          </div>

          <q-chat-message
            :avatar="msg.memberPhoto"
            bg-color="primary"
            :name="msg.memberName"
            :text="[msg.text]"
            text-color="white"
            v-else
          />
        </template>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import { useMessageStore } from "stores/message";
import { useSessionStore } from "stores/session";

const message = useMessageStore();
const session = useSessionStore();

const refDivScroll = ref(null);

function goToLastChat() {
  nextTick(() => refDivScroll.value.lastElementChild.scrollIntoView());
}

watch(
  () => message.newMessage,
  () => goToLastChat()
);
</script>
