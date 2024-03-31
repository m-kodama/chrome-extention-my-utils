<script setup lang="ts">
import { useSideMenu } from './composables/useSideMenu'

const { selectedMenuId, SideMenuId } = useSideMenu({})
</script>

<template>
  <div class="main absolute top-0 left-0 w-full h-screen z-99999">
    <button class="btn btn-primary" onclick="my_modal_2.showModal()">open modal</button>
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box p-0 max-w-5xl w-[800px] max-h-[1200px] min-h-[600px] h-3/5 flex">
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
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>
.main {
  /* width: 800px;
  height: 600px;
  border: solid 1px #000; */
}
</style>
