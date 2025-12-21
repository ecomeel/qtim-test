<template>
<button 
  class="button"
  :class="[ 
    {'button_bordered': bordered}, 
    `button_color-${color}`, 
    `button_text-${textSize}`,
    `button_brr-${borderRadiusSize}`
  ]"
  :style="{ padding: paddings }"
>
  <slot>{{ label }}</slot>
</button>
</template>

<script setup lang="ts">
import { type ButtonProps } from './Button.types';

withDefaults(defineProps<ButtonProps>(), {
  label: "",
  color: "transparent",
  bordered: false,
  textSize: "s",
  borderRadiusSize: "basic",
  paddings: "16.5px 14.5px",
});
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid transparent;
  cursor: pointer;
  line-height: 1em;
  transition: 0.2s;

  &_color {
    &-transparent {
      &:hover {
        background-color: #e8e8e8;
      }
    }

    &-grey {
      color: $black;
      background-color: $milk;

      &:hover {
        background-color: #e8e8e8;
      }
    }

    &-black {
      color: $white;
      background-color: $black;
    }
  }

  &_text {
    &-s {
      font-size: 16px;
    }

    &-m {
      font-size: 20px;
    }
  }

  &_bordered {
    border: 1px solid #e8e8e8;
  }

  &_brr {
    &-basic {
      border-radius: 12px;
    }

    &-circle {
      border-radius: 1000px;
    }
  }
}
</style>