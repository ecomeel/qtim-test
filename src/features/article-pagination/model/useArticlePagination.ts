import { useArticleStore } from "~/src/entities/article";

const PAGE_SIZE = 8

export const useArticlePagination = () => {
  const store = useArticleStore();

  const currentPage = ref(1);

  const articles = computed(() => store.articles);
  const totalPages = computed(() => Math.ceil(articles.value.length / PAGE_SIZE));

  const paginatedArticles = computed(() =>
    articles.value.slice(
      (currentPage.value - 1) * PAGE_SIZE,
      currentPage.value * PAGE_SIZE
    )
  )

  const setPage = (page: number) => {
    currentPage.value = page
  }

  return {
    currentPage,
    totalPages,
    paginatedArticles,
    setPage
  }
}