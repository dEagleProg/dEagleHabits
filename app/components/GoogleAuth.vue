<template>
  <div class="flex items-center gap-2">
    <UIcon name="i-simple-icons-google" class="h-5 w-5" />
    <span>Continue with Google</span>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth()

const loginWithGoogle = async () => {
  try {
    await signIn('google', { callbackUrl: '/' })
  } catch (error) {
    console.error('Ошибка при авторизации через Google:', error)
  }
}
</script> 