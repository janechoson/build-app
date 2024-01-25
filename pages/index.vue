<template>
  <div class="">
    <h1 class="text-2xl">Hello Word</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
