<template>
  <v-card class="articleItem">
    <v-toolbar :title="props.articleSource" v-if="props.showBar">
    </v-toolbar>

    <p>{{ props.articleDesctiption }}</p>

    <v-footer>
      <p>{{ dateEpoch.getFullYear() }}年{{ dateEpoch.getMonth() + 1 }}月{{ dateEpoch.getDate() }}日</p>
      <v-spacer></v-spacer>
      <v-btn size="35" icon="mdi-content-copy" @click="copyText"></v-btn>
      <v-btn size="35" icon="mdi-open-in-new" :href="props.articleUrl" target="_brank"></v-btn>
    </v-footer>
  </v-card>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  articleDesctiption: {
    type: String,
    required: true
  },
  articleSource: {
    type: String,
    required: true
  },
  articleUrl: {
    type: String,
    required: true
  },
  articleEpoch: {
    type: Number,
    required: true
  },
  showBar: {
    type: Boolean,
    default: false
  }
})

const dateEpoch = ref(new Date(0));
dateEpoch.value.setSeconds(props.articleEpoch.valueOf());

const copySuccess = ref(false);
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(
      props.articleDesctiption + `\n` + props.articleUrl
    )
    copySuccess.value = true;

    setTimeout(() => {
      copySuccess.value = false;
    }, 1000);
  } catch (error) {
    console.error("テキストのコピーに失敗しました。", error);
  }
}

</script>

<style scoped></style>
