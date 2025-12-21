<template>
  <header class="header">
    <NuxtLink class="header__logo" to="/">
      <img src="@/assets/img/logo.svg" alt="QTIM">
    </NuxtLink>
    <div class="header__actions">
      <Navigation />
      <div class="header__right-col">
        <LanguageSwitcher />
        <Button
          v-if="!isMobileView"
          label="Let's work" 
          color="black" 
          border-radius-size="circle" 
          paddings="16px 32px"
          text-size="m"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import Button from '~/src/shared/ui/Button.vue';
import { useWindow } from '~/src/shared/lib/useWindow';

const { isMobileView } = useWindow();
</script>

<style lang="scss" scoped>
.header {
  padding: 35px 40px 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &, &__actions, &__right-col {
    display: flex;
    align-items: center;
  }

  &__logo {
    height: min-content;
  }

  &__actions {
    gap: 91px;
  }

  &__right-col {
    gap: 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 25px;

    &__actions {
      gap: 30px;
    }
  }

  @media (max-width: 425px) {
    &__actions {
      gap: 16px
    }
  }
}
</style>