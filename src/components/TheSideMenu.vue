<script setup lang="ts">
import { useSideMenu } from '~/composables/useSideMenu'

const { selectMenu, selectedMenuId, sideMenu } = useSideMenu({})
</script>

<template>
  <div
    class="w-[64px] flex flex-col justify-start items-center px-2 py-8 gap-2 bg-[color:--md-surfaceContainer] text-[color:--md-onSurface]"
  >
    <div v-for="menu in sideMenu" :key="menu.id" class="tooltip tooltip-left" :data-tip="menu.tooltip">
      <button
        class="btn btn-circle"
        :class="{
          selected: menu.id === selectedMenuId,
        }"
        @click="selectMenu(menu.id)"
      >
        <span class="material-symbols-rounded">{{ menu.icon }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
