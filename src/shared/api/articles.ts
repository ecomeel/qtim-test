import type { Article } from "~/src/entities/article/model/types";
import { api } from "../lib/api";

export const getArticles = (): Promise<Article[]> => api("/posts")

export const getArticleById = (id: string): Promise<Article> => api(`/posts/${id}`)