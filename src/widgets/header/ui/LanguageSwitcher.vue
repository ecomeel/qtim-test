<template>
<Button 
  class="btn" 
  bordered 
  border-radius-size="circle" 
  paddings="12px"
>
  <img :src="currentLangPreview" :alt="selectedLanguage">
</Button>
</template>

<script setup lang="ts">
import Button from "~/src/shared/ui/Button.vue"
import { LANGUAGES, type Language } from "../lib/languages";

const selectedLanguage = ref<Language>("eng")

const currentLangPreview = computed(
  () => LANGUAGES.find(l => l.id === selectedLanguage.value)!.imgLink
)

</script>

<style lang="scss" scoped>
.btn {
  line-height: 0;
  border-width: 2px;
}
</style>