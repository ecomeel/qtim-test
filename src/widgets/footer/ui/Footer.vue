<template>
<footer class="footer">
  <div class="footer__top">
    <div class="footer__header">
      <p>Is there a project?</p>
      <p>Let’s work together</p>
    </div>
    <ul class="footer__contacts">
      <li class="footer__contacts-item">
        <p>For all questions</p>
        <a href="tel:+79202780068">+7 (920) 278—00—68</a>
        <a href="mailto:qtim@agency.com">qtim@agency.com</a>
      </li>
      <li class="footer__contacts-item">
        <p>Office in Russia</p>
        <p>139 Ruben Station Lake Drew, NM 52678</p>
        <Button color="black" paddings="11.5px" border-radius-size="circle">
          <img src="@/assets/img/pink-arrow.svg" alt="social">
        </Button>
      </li>
      <li class="footer__contacts-item">
        <p>Office in Russia</p>
        <p>139 Ruben Station Lake Drew, NM 52678</p>
        <Button color="black" paddings="11.5px" border-radius-size="circle">
          <img src="@/assets/img/pink-arrow.svg" alt="social">
        </Button>
      </li>
    </ul>
  </div>
  <div class="footer__bottom">
    <ul class="footer__socials">
      <li v-for="item in SOCIALS.slice(0, 3)" :key="item.id">
        <NuxtLink :to="item.link">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <button class="footer__go-btn">Go</button>
    <ul class="footer__socials">
      <li v-for="item in SOCIALS.slice(3)" :key="item.id">
        <NuxtLink :to="item.link">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</footer>
</template>

<script setup lang="ts">
import Button from '~/src/shared/ui/Button.vue';
import { SOCIALS } from '~/src/shared/constants/socials';
</script>

<style scoped lang="scss">
.footer {
  padding: 140px 112px 30px;
  background-color: $pink;
  overflow: hidden;

  ::v-deep(.button) {
    line-height: 0;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__header {
    max-width: 32vw;

    > :first-child {
      font-size: 16px;
      letter-spacing: 0.01em;
    }

    > :last-child {
      margin-top: 56px;
      font-size: 7.78vw;
      line-height: 1em;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 14px;
    }
  }

  &__contacts {
    margin-top: 75px;
    margin-right: 16vw;
    max-width: 152px;
    display: flex;
    flex-direction: column;
    gap: 36px;

    &-item {
      > * {
        font-size: 16px;
        letter-spacing: 0.01em;
      }

      > :first-child {
        margin-bottom: 12px;
      }
      > :last-child {
        margin-top: 8px;
      }

      a {
        display: block;
      }
    }
  }

  &__bottom {
    margin-top: 143px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__socials {
    display: flex;
    gap: 32px;

    > * {
      font-size: 16px;
      letter-spacing: 0.01em;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 6px;
    }
  }

  &__go-btn {
    cursor: pointer;
    padding: 160px 160px 0;
    display: block;
    color: $white;
    border-radius: 100%;
    position: relative;
    z-index: 1;
    font-size: 32px;

    &::after {
      content: "";
      background-color: $black;
      position: absolute;
      width: 24.8vw;
      aspect-ratio: 1 / 1;
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      border-radius: 200% 200% 0 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 80px 50px 30px;

    &__contacts {
      margin-right: 100px;
    }

    &__bottom {
      margin-top: 50px;
    }

    &__socials {
      flex-direction: column;
      align-items: center;
    }
    &__go-btn {
      padding: 120px 120px 0;
    }
  }

  @media (max-width: 768px) {
    &__top {
      flex-direction: column;
      justify-content: flex-start;
    }

    &__header {
      max-width: 250px;

      > :last-child {
        margin-top: 30px;
        font-size: 32px;
        line-height: 1.3em;
      }
    }

    &__contacts {
      margin-top: 40px;
      margin-right: 0;
      flex-direction: row;
      max-width: unset;
      flex-wrap: wrap;
      gap: 20px;

      &-item {
        width: 152px;
      }
    }

    &__go-btn {
      background-color: $black;
      padding: 30px;

      &::after {
        width: 0;
        height: 0;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 40px 30px 20px;

    &__go-btn {
      padding: 16px;
      font-size: 24px;
    }
  }
}
</style>