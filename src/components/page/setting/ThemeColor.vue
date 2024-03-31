<script setup lang="ts">
import { useThemeChanger } from '~/theme/theme'

const themeChanger = useThemeChanger()
</script>

<template>
  <SettingPanel title="テーマカラー" class="mt-6">
    <div class="flex flex-wrap gap-2 px-1">
      <button
        class="p-0 btn bg-transparent hover:bg-[color:--md-surfaceVariant] w-[64px] h-[64px] flex justify-center items-center outline outline-1 outline-[color:--md-surfaceVariant] rounded-xl"
        @click="themeChanger.changeMode(themeChanger.mode.value === 'light' ? 'dark' : 'light')"
      >
        <span class="material-symbols-rounded">{{
          themeChanger.mode.value === 'light' ? 'dark_mode' : 'light_mode'
        }}</span>
      </button>
      <button
        v-for="theme in themeChanger.themeCatalog.value"
        :key="theme.themeKey"
        class="p-0 btn bg-transparent hover:bg-[color:--md-surfaceVariant] w-[64px] h-[64px] flex justify-center items-center outline outline-1 outline-[color:--md-surfaceVariant] rounded-xl"
        @click="themeChanger.changeThemeKey(theme.themeKey)"
      >
        <div
          class="w-[40px] h-[40px] rounded-full flex justify-center items-center"
          :style="`background-color:${theme.catalog.container};color:${theme.catalog.text}`"
        >
          <span v-if="theme.themeKey === themeChanger.themeKey.value" class="material-symbols-rounded">check</span>
        </div>
      </button>
    </div>
  </SettingPanel>
</template>

<style scoped></style>
