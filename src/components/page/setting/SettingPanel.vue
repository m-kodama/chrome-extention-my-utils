<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="px-4 pt-2 pb-6 bg-[color:--md-surfaceContainerLow] rounded-lg">
    <h3 class="py-2 text-lg sticky top-0 bg-[color:--md-surfaceContainerLow]">{{ props.title }}</h3>
    <div class="mt-2">
      <slot></slot>
    </div>
  </div>
</template>
