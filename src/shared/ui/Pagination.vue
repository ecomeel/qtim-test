<template>
<div class="pagination">
  <Button 
    v-if="isShowPrevBtn"
    class="pagination__prev-btn"
    bordered
    paddings="9px 11px 11px 9px"
    @click="emit('changePage', currentPage - 1)"
  >
    <img :src="sideArrow" alt="prev">
  </Button>
  <Button
    v-for="(item, index) in visiblePages" 
    :key="index"
    :label="String(item)"
    :color="getBtnColor(item)"
    class="pagination__num"
    @click="item !== '...' && emit('changePage', item)"
  />
  <Button 
    v-if="isShowNextBtn"
    class="pagination__next-btn"
    bordered
    paddings="9px 9px 11px 11px"
    @click="emit('changePage', currentPage + 1)"
  >
    <img :src="sideArrow" alt="next">
  </Button>
</div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import sideArrow from "@/assets/img/side-arrow.svg"
import type { PaginationProps, PaginationItem } from './Pagination.types';

const emit = defineEmits<{
  (e: 'changePage', page: number): void
}>()

const props = defineProps<PaginationProps>();

const isShowPrevBtn = computed(() => props.currentPage !== 1);
const isShowNextBtn = computed(() => props.currentPage !== props.totalPages)

const getBtnColor = (buttonNum: PaginationItem) => {
  return buttonNum === props.currentPage ? "black" : "grey"
}

const visiblePages = computed<PaginationItem[]>(() => {
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: PaginationItem[] = []

  pages.push(1)

  if (current > 3) {
    pages.push('...')
  }

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (current < total - 2) {
    pages.push('...')
  }

  pages.push(total)

  return pages
})

</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 8px;

  &__prev-btn {
    padding: 9px 9px 11px 11px;
    transform: scaleX(-1);
  }

  &__prev-btn, &__next-btn {
    line-height: 0;
  }

  &__num {
    height: 44px;
    width: 44px;
  }
}
</style>