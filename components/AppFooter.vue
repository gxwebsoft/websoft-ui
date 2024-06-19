<script setup lang="ts">
const links = [{
  label: '资源',
  children: [{
    label: '素材广场'
  }, {
    label: '文档中心'
  }, {
    label: '客户案例'
  }, {
    label: '私有仓库'
  }]
}, {
  label: '特色',
  children: [{
    label: '最新资讯'
  }, {
    label: '官方商城'
  }, {
    label: '友情链接'
  }, {
    label: '实用链接'
  }]
}, {
  label: '关于',
  children: [{
    label: '通知公告'
  }, {
    label: '联系我们'
  }, {
    label: '技术工单'
  }, {
    label: '隐私协议'
  }]
}]

const toast = useToast()

const phone = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup
              label="留下联系方式我们第一时间联系您"
              :ui="{ container: 'mt-3' }"
            >
              <UInput
                v-model="phone"
                type="phone"
                placeholder="请输入您的手机号码"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                required
                size="xl"
                autocomplete="off"
                class="max-w-sm"
                input-class="rounded-full"
              >
                <template #trailing>
                  <UButton
                    type="submit"
                    size="xs"
                    color="primary"
                    :label="loading ? '正在提交' : '提交'"
                    :loading="loading"
                  />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm pe-5">
        Copyright © {{ new Date().getFullYear() }} Websoft Inc.
      </p>
      <p class="text-gray-500 dark:text-gray-400 text-sm">桂ICP备13003666号-1</p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
      <UButton
          to="https://admin.gxwebsoft.com"
          target="_blank"
          icon="i-heroicons-chart-bar"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
      />
      <UButton
        to="https://github.com/gxwebsoft/websoft-ui"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
