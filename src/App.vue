<script setup lang="ts"></script>

<template>
  <div class="main">
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" checked />
      <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" />
      <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
      <div role="tabpanel" class="tab-content p-10">
        Tab content 3
        <button class="btn btn-primary mt-10">Hello daisyUI!!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 800px;
  height: 600px;
  border: solid 1px #000;
}
</style>
