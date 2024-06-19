<script setup lang="ts">
import type {Navigation} from "~/api/cms/navigation/model";
import type {ApiResult} from "~/api";
import type {Website} from "~/api/cms/website/model";
const tenantId = '10123';

// 请求数据
const { data: website } = await useFetch<ApiResult<Website>>('https://modules.gxwebsoft.com/api/cms/website/getSiteInfo',
    {
      headers: {
      tenantId: '10123'
    }
})

// 赋值
const info = website.value.data

// 顶部导航条
const topNav = ref<Navigation[]>()
// 底部导航条
const bottomNav = ref<Navigation[]>()

const reload = () => {
  if(info){
    topNav.value = info?.navigations.filter(d => d.position == 1).map((item) => {
      return {
        label: item.title,
        to: item.path
      }
    });
    bottomNav.value = info.navigations.filter(d => d.position == 2).map((item) => {
      return {
        label: item.title,
        to: item.path
      }
    });
  }
}
reload()
</script>

<template>
  <UHeader :links="topNav">
    <template #logo>
      <NuxtImg src="https://oss.wsdns.cn/20240618/2fbe76024cdc47f5b1057dea577557a2.svg" width="42" />
      <div class="flex justify-between flex-row">
        <span class="text-2xl font-sans">{{ info.websiteName || 'websoft' }}</span>
        <span class="text-orange-500 text-2xl font-black" style="font-family: 'Arial',serif">UI</span>
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
        :links="mapContentNavigation(topNav)"
        default-open
      />
    </template>
  </UHeader>
</template>
