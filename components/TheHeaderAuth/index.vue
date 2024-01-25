<template>
  <div class="flex justify-between item">
    <h1 class="text-2xl">Worlder Land</h1>
    <el-button @click="handleLogOut">Đăng xuất</el-button>
  </div>
</template>

<script setup lang="ts">
import { removeCookieAuth } from "../utils";

const router = useRouter();

const handleLogOut = () => {
  router.push("/login");
  removeCookieAuth();
};
</script>

<style scoped></style>
