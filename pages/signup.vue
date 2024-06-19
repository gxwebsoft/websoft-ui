<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Sign up'
})

const fields = [{
  name: 'name',
  type: 'text',
  label: '用户名',
  placeholder: '请输入您的用户名'
}, {
  name: 'email',
  type: 'text',
  label: '电子邮箱',
  placeholder: '请输入您的电子邮箱'
}, {
  name: 'password',
  label: '登录密码',
  type: 'password',
  placeholder: '请输入您的登录密码'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: '请输入您的电子邮箱' })
  if (!state.password) errors.push({ path: 'password', message: '请输入您的登录密码' })
  return errors
}

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  color: 'gray' as const,
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
      align="top"
      title="注册账号"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ label: '立即注册' }"
      @submit="onSubmit"
    >
      <template #description>
        已有账号? <NuxtLink
          to="/login"
          class="text-primary font-medium"
        >立即登录</NuxtLink>.
      </template>

      <template #footer>
        注册即表示同意我们的服务协议 <NuxtLink
          to="/"
          class="text-primary font-medium"
        >服务条款</NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
