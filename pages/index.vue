<template>
<h1>Articles</h1>
<p v-if="pending">Loading...</p>
<template v-else>
  <ArticlesList :articles="paginatedArticles" />
  <Pagination 
    :total-pages="totalPages"
    :current-page="currentPage"
    @change-page="setPage"
  />
</template>
</template>

<script setup lang="ts">
import { useArticleStore } from '~/src/entities/article/model/store';
import { ArticlesList } from '~/src/widgets/articles';
import Pagination from '~/src/shared/ui/Pagination.vue';
import { getArticles } from '~/src/entities/article/api/articles'
import { useArticlePagination } from '~/src/features/article-pagination';

const articleStore = useArticleStore();

const { data: articles, pending } = await useAsyncData(
  'articles',
  getArticles
)
articleStore.updateArticlesList(articles.value ?? []);



const {
  paginatedArticles,
  currentPage,
  totalPages,
  setPage
} = useArticlePagination()

</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 59px;
  font-size: 84px;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
}
</style>