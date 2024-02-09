<template>
  <q-page>
    <q-card class="absolute-center bg-secondary my-card text-white">
      <q-card-section v-if="isSupported">
        <q-file
          accept=".jpg, image/*"
          ref="refFileInput"
          style="display: none"
          @update:model-value="changePhoto"
        />
        <q-item>
          <q-item-section avatar>
            <q-avatar class="shadow-5" color="blue-grey-2" size="70px">
              <img
                class="cursor-pointer"
                @click="refFileInput.pickFiles()"
                :src="photo"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-input
              bg-color="blue-grey-2"
              dense
              label="Your name"
              filled
              :rules="[(val) => !!val || 'Name is required']"
              v-model="name"
            />
            <q-input
              bg-color="blue-grey-2"
              dense
              label="Location"
              filled
              v-model="location"
            />
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-actions vertical v-if="isSupported">
        <q-btn class="bg-primary" @click="join" flat :loading="loading"
          >Join</q-btn
        >
      </q-card-actions>

      <q-card-section v-else>
        <div class="text-center text-h6">
          Sorry, your browser does not support websocket... 🥲🙏
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useSessionStore } from "stores/session";

const refFileInput = ref(null);
const session = useSessionStore();

const isSupported = ref(true);
const loading = ref(false);
const location = ref("");
const name = ref("");
const photo = ref("blank-photo.png");

function changePhoto(imgFile) {
  const maxSize = 100; // resize to this maxSize
  let h, w;
  const img = new Image();
  img.onload = () => {
    h = img.height;
    w = img.width;
    if (w > h) {
      if (w > maxSize) {
        h *= maxSize / w;
        w = maxSize;
      }
    } else {
      if (h > maxSize) {
        w *= maxSize / h;
        h = maxSize;
      }
    }
    const canvas = document.createElement("canvas");
    canvas.height = h;
    canvas.width = w;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    photo.value = canvas.toDataURL("image/jpeg");
  };
  img.src = URL.createObjectURL(imgFile);
}

function join() {
  loading.value = true;
  session.join(name.value, location.value, photo.value);
}

onMounted(() => {
  loading.value = false;
  isSupported.value = window["WebSocket"];
});
</script>
