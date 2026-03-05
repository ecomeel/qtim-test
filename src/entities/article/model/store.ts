import { defineStore } from 'pinia'
import { getArticles, getArticleById } from '../api/articles'
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

  const updateArticlesList = (data: Article[]) => {
    articles.value = data
  }

  return {
    articles,
    currentArticle,
    fetchArticles,
    fetchArticleById,
    updateArticlesList,
    isLoading,
  }
})
