<template>
  <div class="p-8 border border-solid rounded-xl">
    <el-form :model="formLogin" label-width="120px" label-position="left">
      <el-form-item label="Tên Tài Khoản">
        <el-input v-model="formLogin.username" class="!w-[300px]" />
      </el-form-item>

      <el-form-item label="Password">
        <el-input v-model="formLogin.password" class="!w-[300px]" />
      </el-form-item>

      <el-form-item>
        <el-button
          class="!w-[300px]"
          @click="handleLogin(formLogin)"
          :loading="isLoading"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

definePageMeta({
  layout: "login",
});

interface IForm {
  username: string;
  password: string;
}

const formLogin = ref<IForm>({
  username: "kminchelle",
  password: "0lelplR",
});

const authStore = useAuthStore();
const isLoading = ref(false);

const handleLogin = async (form: IForm) => {
  isLoading.value = true;
  await authStore.handleSignIn(form);
};

onUnmounted(() => {
  isLoading.value = false;
});
</script>

<style lang="scss" scoped></style>
