export const useWindow = () => {
  const viewport = useViewport();

  const isMobileView = computed(() => viewport.isLessThan("tablet"))

  return {
    isMobileView
  }
}