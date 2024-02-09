<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          @click="toggleLeftDrawer"
          flat
          dense
          icon="menu"
          round
          v-if="session.joined"
        />

        <q-toolbar-title> Websocket Chat </q-toolbar-title>

        <div><q-icon name="forum" size="2em" /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      bordered
      v-if="session.joined"
      v-model="leftDrawerOpen"
    >
      <div class="bg-blue-grey-1 row" style="height: 50px">
        <div class="col-9 q-pa-md text-weight-light">Members</div>
        <div class="col relative-position">
          <q-btn
            class="absolute-center"
            @click="leave"
            color="secondary"
            label="Leave"
            size="sm"
          />
        </div>
      </div>

      <q-scroll-area style="height: calc(100svh - 50px)">
        <q-list>
          <ItemMember
            :key="item.id"
            :member="item"
            v-for="item in member.list"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-blue-grey-2" v-if="session.joined">
      <div class="bg-white q-ma-sm">
        <q-input
          @keydown.enter="sendMessage"
          placeholder="Type a message"
          v-model="message"
        />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import ItemMember from "components/ItemMember.vue";
import { ref } from "vue";
import { useMemberStore } from "stores/member";
import { useSessionStore } from "stores/session";

const member = useMemberStore();
const session = useSessionStore();

const leftDrawerOpen = ref(false);
const message = ref("");

function leave() {
  session.leave();
}

function sendMessage() {
  session.sendMessage(message.value);
  message.value = "";
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
