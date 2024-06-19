<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: '登录'
})

const fields = [{
  name: 'email',
  type: 'text',
  label: '登录账号',
  placeholder: '请输入登录账号'
}, {
  name: 'password',
  label: '登录密码',
  type: 'password',
  placeholder: '请输入登录密码'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: '请填写登录账号' })
  if (!state.password) errors.push({ path: 'password', message: '请填写登录密码' })
  return errors
}

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  color: 'white' as const,
  click: () => {
    console.log('Redirect to GitHub')
  }
}]

function onSubmit(data: any) {
  console.log('Submitted', data)
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="欢迎登录"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ label: '登录', trailingIcon: 'i-heroicons-arrow-right-20-solid' }"
      @submit="onSubmit"
    >
      <template #description>
        还没有账号? <NuxtLink
          to="/signup"
          class="text-primary font-medium"
        >立即注册</NuxtLink>.
      </template>

      <template #password-hint>
        <NuxtLink
          to="/"
          class="text-primary font-medium"
        >忘记密码?</NuxtLink>
      </template>

      <template #footer>
        登录及表示您同意我们的 <NuxtLink
          to="/"
          class="text-primary font-medium"
        >服务条款</NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
