<template>
  <q-item>
    <q-item-section avatar>
      <img class="avatar" :src="member.photo" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ member.name }}</q-item-label>
      <q-item-label caption>{{ member.location }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator />
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  min-width: 48px;
}
</style>
