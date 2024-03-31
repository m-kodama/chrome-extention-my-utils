<script setup lang="ts"></script>

<template>
  <div class="flex flex-col grow">
    <div class="dialog-header px-6 pt-6 pb-1">
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <input type="text" class="grow" placeholder="ブックマーク / タブ / Confluence / JIRA / コマンド を検索" />
      </label>
    </div>
    <div class="dialog-body px-6 py-4 grow overflow-scroll">
      <div class="flex mt-8">
        <div class="w-[100px] h-[100px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainerLowest]">
          SCLowest
        </div>
        <div class="w-[100px] h-[100px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainerLow]">SCLow</div>
        <div class="w-[100px] h-[100px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainer]">SC</div>
        <div class="w-[100px] h-[100px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainerHigh]">SCHigh</div>
        <div class="w-[100px] h-[100px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainerHighest]">
          SCHighest
        </div>
      </div>
      <div class="mt-16"></div>
      <div class="w-[100px] h-[1000px] text-[color:--md-onSurface] bg-[color:--md-surfaceContainerLowest]">
        SCLowest
      </div>
    </div>
    <div class="dialog-footer px-6 py-2 flex gap-2">
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </div>
  </div>
</template>

<style scoped>
.dialog-header {
}
.dialog-body {
  background-color: var(--md-surface);
  color: var(--md-onSurface);
}
.dialog-footer {
  background-color: var(--md-surface);
  color: var(--md-onSurface);
  border-top: solid 1px var(--md-surfaceVariant);
}
</style>
