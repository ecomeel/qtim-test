import { type Article } from "../model/types";
import { api } from "~/src/shared/lib/api";

export const getArticles = (): Promise<Article[]> => api("/posts")

export const getArticleById = (id: string): Promise<Article> => api(`/posts/${id}`)