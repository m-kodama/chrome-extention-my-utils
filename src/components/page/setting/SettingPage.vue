<script setup lang="ts"></script>

<template>
  <div class="flex flex-col grow bg-[color:--md-surface]">
    <div class="dialog-header">
      <h2 class="text-2xl font-bold px-6 py-4">Settings</h2>
    </div>
    <div class="dialog-body px-6 grow overflow-y-scroll">
      <ThemeColor></ThemeColor>
      <div class="w-[100px] h-[1000px] bg-[color:--md-surfaceContainerLowest]">SCLowest</div>
    </div>
    <!-- <div class="dialog-footer px-6 py-2 flex gap-2">
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </div> -->
  </div>
</template>

<style scoped>
.dialog-header {
  border-bottom: solid 1px var(--md-surfaceVariant);
}
/* .dialog-body {
} */
.dialog-footer {
  border-top: solid 1px var(--md-surfaceVariant);
}
</style>
