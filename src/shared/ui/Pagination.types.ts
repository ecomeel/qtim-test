export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export type PaginationItem = number | '...'