<template>
<div class="list">
  <ArticleCard 
    v-for="article in articles" 
    :key="article.id"
    :title="article.title"
    :id="article.id"
    :image="article.image"
  />
</div>
</template>

<script setup lang="ts">
import ArticleCard from '~/src/entities/article/ui/ArticleCard.vue';
import type { Article } from '~/src/entities/article/model/types';

defineProps<{ articles: Article[] }>()

</script>

<style lang="scss" scoped >
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 60px 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 40px 20px;
  }
  
  @media (max-width: 460px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 24px 16px;
  }
}
</style>