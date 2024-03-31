<script setup lang="ts">
import { ref } from 'vue'

type Tab = {
  label: string
  icon: string
  tooltip: string
}
const tabs = ref<Tab[]>([
  {
    label: 'Search',
    icon: 'search',
    tooltip: '検索',
  },
  {
    label: 'Bookmark',
    icon: 'bookmark',
    tooltip: 'ブックマーク',
  },
  {
    label: 'Tab',
    icon: 'tab_group',
    tooltip: 'タブ管理',
  },
  {
    label: 'Display Env',
    icon: 'label',
    tooltip: '環境表示',
  },
  {
    label: 'Setting',
    icon: 'settings',
    tooltip: '設定',
  },
])
const selectedTabIndex = ref<number>(0)
const selectTab = (index: number) => {
  selectedTabIndex.value = index
}
</script>
<template>
  <div class="tab-container">
    <div role="tablist" class="tabs tabs-bordered px-4 pt-4">
      <a
        v-for="(tab, index) in tabs"
        :key="`tab-${index}-${tab.label}`"
        role="tab"
        class="tab"
        :class="{ 'tab-active': index === selectedTabIndex }"
        @click="selectTab(index)"
        >{{ tab.label }}</a
      >
    </div>
  </div>
</template>
<style scoped>
.tab-container {
  background-color: var(--md-surface);
  .tabs {
    display: flex;
    border-bottom: solid 1px var(--md-surfaceVariant);
  }
  .tab {
    color: var(--md-onSurfaceVariant);
    border-color: transparent;
    opacity: 0.54;
    padding-bottom: 4px;
  }
  .tab.tab-active {
    color: var(--md-primary);
    border-color: var(--md-primary);
    opacity: 1;
  }
}
</style>
