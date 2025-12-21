import { defineStore } from 'pinia'
import { getArticles, getArticleById } from '~/src/shared/api/articles'
import type { Article } from './types'
import { useLoading } from '~/src/shared/lib/useLoading';

export const useArticleStore = defineStore('article', () => {
  const { isLoading, withLoading } = useLoading();

  const articles = ref<Article[]>([]);
  const currentArticle = ref<Article | null>(null)

  const fetchArticles = async () => {
    withLoading(async () => {
      articles.value = await getArticles();
    })
  }

  const fetchArticleById = async (id: string) => {
    withLoading(async () => {
      currentArticle.value = await getArticleById(id)
    })
  }

  return {
    articles,
    currentArticle,
    fetchArticles,
    fetchArticleById,
    isLoading,
  }
})
