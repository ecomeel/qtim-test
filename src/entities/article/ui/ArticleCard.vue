<template>
<NuxtLink :to="`/articles/${id}`" class="article">
  <div class="article__image">
    <img loading="lazy" :src="image" alt="Article image">
  </div>
  <p class="article__title">{{ title }}</p>
  <p class="article__link">
    Read more
  </p>
</NuxtLink>
</template>

<script setup lang="ts">
import { type Article } from '../model/types';

defineProps<Pick<Article, "id" | "title" | "image">>();
</script>

<style scoped lang="scss">
.article {
  transition: 0.2s;

  &__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: linear-gradient(90deg,rgba(242, 237, 237, 1) 0%, rgba(193, 230, 207, 0.2) 51%, rgba(230, 230, 195, 0.52) 98%);

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin: 24px 0 12px;
    padding-right: 16px;
  }
  &__link {
    color: $pink;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s;
  }

  &:hover {
    transform: translateY(-20px);
    
    .article__link {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 768px) {
    &__title {
      margin: 16px 0 8px;
    }
  }
}
</style>