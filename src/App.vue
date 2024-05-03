<template>
  <el-config-provider :locale="zhCn">
    <div
      class="app"
      :style="appStyle">
      <div class="lock-icon" @click="toggleView">
      </div>
      <div v-show="isView" class="ly-homepage">
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { RouterView } from 'vue-router';
import { computed, ref } from 'vue'

const isView = ref(false)

const appStyle = computed(() => {
  return isView.value
    ? {
        border: '1px solid #333'
      }
    : ''
})

const toggleView = () => {
  isView.value = !isView.value
}
</script>

<style lang="scss">
.app {
  border-radius: 8px;

  .ly-homepage {
    margin-top: 64px;
    padding: 16px;
    min-width: 400px;
    box-sizing: border-box;
  }

  .lock-icon {
    cursor: pointer;
    position: fixed;
    left: 16px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-image: url('@src/assets/image/lock-icon.png');
    background-size: cover;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid #333;
    border-radius: 50%;

  }
}
</style>
