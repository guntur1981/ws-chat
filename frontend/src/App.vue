<template>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";
import { useSessionStore } from "stores/session";
import { watch } from "vue";

const router = useRouter();
const session = useSessionStore();

watch(
  () => session.joined,
  () => {
    session.joined ? router.push("/") : router.push("/join");
  }
);
</script>
