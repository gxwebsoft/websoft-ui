<script setup lang="ts">
const {data: info} = useFetch('https://modules.gxwebsoft.com/api/cms/website/getSiteInfo')
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))
console.log(info);
const links = [{
  label: '文档',
  to: '/docs'
}, {
  label: '产品',
  to: '/product'
}, {
  label: '价格',
  to: '/pricing'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtImg src="https://oss.wsdns.cn/20240618/2fbe76024cdc47f5b1057dea577557a2.svg" width="42" />
      <div class="flex justify-between flex-row">
        <span class="text-2xl">websoft</span>
        <span class="text-orange-500 text-2xl font-bold" style="font-family: 'Arial',serif">UI</span>
      </div>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton
          to="https://github.com/gxwebsoft/websoft-ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
      />
<!--      <UButton-->
<!--        label="登录"-->
<!--        icon="i-heroicons-arrow-right-20-solid"-->
<!--        trailing-->
<!--        color="black"-->
<!--        to="/signup"-->
<!--        class="hidden lg:flex"-->
<!--      />-->
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
