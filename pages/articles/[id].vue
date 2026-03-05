<template>
  <p v-if="articleStore.isLoading">Loading...</p>
  <p v-else-if="!article">Fail to load post</p>
  <template v-else>
    <h1 class="article__header">{{ article.title }}</h1>
    <div class="article__banner">
      <img :src="article.image" alt="banner">
    </div>
    <div class="article__description">
      <h2>About</h2>
      <p>{{ article.description }}</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useArticleStore } from '~/src/entities/article'

const route = useRoute()
const articleStore = useArticleStore()

const articleId = route.params.id as string

await useAsyncData(
  `article-${articleId}`,
  () => articleStore.fetchArticleById(articleId)
)

const article = computed(() => articleStore.currentArticle)
</script>

<style lang="scss" scoped>
.article {
  &__header {
    font-size: 84px;
    line-height: 1em;
  }

  &__banner {
    margin-top: 73px;
    aspect-ratio: 2 / 1;
    width: 100%;
    background: linear-gradient(90deg,rgba(242, 237, 237, 1) 0%, rgba(193, 230, 207, 0.2) 51%, rgba(230, 230, 195, 0.52) 98%);

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__description {
    margin-top: 80px;
    max-width: 48vw;

    h2 {
      font-size: 16px;
    }

    p {
      margin-top: 32px;
      font-size: 36px;
      line-height: 1.24em;
    }
  }

  @media (max-width: 768px) {
    &__header {
      font-size: 40px;
    }

    &__banner {
      margin-top: 40px;
    }

    &__description {
      margin-top: 40px;
      max-width: 80vw;

      p {
        margin-top: 16px;
        font-size: 24px;
      }
    }
  }
}
</style>