<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSideMenu } from '~/composables/useSideMenu'

const { selectedMenuId, SideMenuId } = useSideMenu({})

const modal = ref<HTMLElement | null>(null)
const toggleModal = () => {
  const showModal = async () => {
    if (modal.value != null && 'showModal' in modal.value && typeof modal.value.showModal === 'function') {
      modal.value?.showModal()
    }
  }
  const closeModal = async () => {
    if (modal.value != null && 'close' in modal.value && typeof modal.value.close === 'function') {
      modal.value?.close()
    }
  }
  const isOpen = modal.value?.hasAttribute('open')
  isOpen ? closeModal() : showModal()
}

const useKeyDown = () => {
  const pushingKeys = new Set<string>()
  const shortcut = ['Control', 'q']
  const handleKeydown = (event: KeyboardEvent) => {
    pushingKeys.add(event.key)
    if (shortcut.every((key) => pushingKeys.has(key))) {
      toggleModal()
    }
  }
  const handleKeyUp = (event: KeyboardEvent) => {
    pushingKeys.delete(event.key)
  }

  return {
    handleKeydown,
    handleKeyUp,
  }
}
const { handleKeydown, handleKeyUp } = useKeyDown()
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('keyup', handleKeyUp)
})
</script>

<template>
  <!-- absolute top-0 left-0 w-full h-screen z-99999 -->
  <div id="app-my-utils" class="main bg-transparent" data-theme="material-design3-paleGold-dark">
    <dialog ref="modal" class="modal">
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

<style scoped></style>
