<template>
  <button class="ra-button" :ass="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ra-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ra-button--${buttonProps.type}`]: buttonProps.type };
});
</script>


