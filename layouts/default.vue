<template>
  <div class="page">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from '~/src/widgets/header';
import { Footer } from '~/src/widgets/footer';
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1;
    padding: 120px 112px 80px;
  }

  @media (max-width: 1024px) {
    main {
      padding: 70px 50px 60px;
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 60px 40px;
    }
  }

  @media (max-width: 425px) {
    main {
      padding: 40px 25px;
    }
  }
}
</style>