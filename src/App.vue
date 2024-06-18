<script setup lang="ts">
import { useSideMenu } from '~/composables/useSideMenu'

const { selectedMenuId, SideMenuId } = useSideMenu({})
</script>

<template>
  <div class="p-0 grow flex">
    <!-- メインコンテンツ -->
    <SearchPage v-show="selectedMenuId === SideMenuId.search" />
    <div v-show="selectedMenuId === SideMenuId.bookmark" class="grow">
      {{ SideMenuId.bookmark }}
    </div>
    <div v-show="selectedMenuId === SideMenuId.tabManagement" class="grow">
      {{ SideMenuId.tabManagement }}
    </div>
    <div v-show="selectedMenuId === SideMenuId.displayEnv" class="grow">
      {{ SideMenuId.displayEnv }}
    </div>
    <div v-show="selectedMenuId === SideMenuId.script" class="grow">
      {{ SideMenuId.script }}
    </div>
    <SettingPage v-show="selectedMenuId === SideMenuId.setting" />
    <!-- サイドメニュー -->
    <TheSideMenu />
  </div>
</template>

<style scoped></style>
