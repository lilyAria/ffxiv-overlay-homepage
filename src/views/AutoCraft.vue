<template>
  <div class="auto-craft">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      :label-width="86">
      <el-form-item label="总次数" prop="totalCount">
        <el-input
          v-model.number="form.totalCount"
          :disabled="isRunning" />
      </el-form-item>
      <el-form-item label="加工次数">
        <span>{{ count }}</span>
      </el-form-item>
      <el-form-item label="剩余次数">
        <span>{{ form.balanceCount }}</span>
      </el-form-item>
      <el-form-item>
        <el-button v-if="!isRunning" @click="startAuto">开始自动</el-button>
        <el-button v-else @click="startAuto">停止自动</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script setup lang="ts">
import { BroadcastSource, OverlayCall, OverlayEvent } from '@src/utils/enum';
import { onMounted, ref } from 'vue'
import { type ElForm, type FormRules } from 'element-plus'
import { computed } from '@vue/reactivity';

const formRef = ref<InstanceType<typeof ElForm> | null>(null)

const form = ref({
  totalCount: 20,
  balanceCount: 20,
})

const count = computed(() => {
  const tCount = form.value.totalCount - form.value.balanceCount
  return tCount > 0 ? tCount : 0
})

/** 必填项规则 */
const requiredRule = {
  required: true,
  message: '必填项',
}

const validateCount = (rule: any, value: any, callback: any) => {
  if (form.value.totalCount < form.value.balanceCount) {
    callback(new Error('剩余次数要小于等于总次数'))
  }
}

const isRunning = ref(false)

const rules: FormRules = {
  totalCount: [
    requiredRule,
    {
      type: 'number',
      max: 99,
      min: 1,
      message: '最大99，最小1',
    }
  ],
  balanceCount: [
    requiredRule,
    {
      type: 'number',
      max: 99,
      min: 0,
      message: '最大99, 最小0',
    },
    {
      validator: validateCount
    }
  ]
}

const startAuto = () => {
  formRef.value?.validate((validate) => {
    if (validate) {
      form.value.balanceCount = form.value.totalCount

      callOverlayHandler({
        call: OverlayCall.BROADCAST,
        msg: {
          totalCount: form.value.totalCount,
          autoFlag: true
        },
        source: BroadcastSource.AUTO_CRAFT
      })
    }
  })
}

onMounted(() => {
  addOverlayListener(OverlayEvent.BROADCAST_MESSAGE, (data) => {
    if (Object.hasOwn(data, 'autoFlag')) {
      isRunning.value = Boolean(data.autoFlag)
    }
    if (Object.hasOwn(data, 'balanceCont')) {
      form.value.balanceCount = Number(data.balanceCont)
    }
  })
  startOverlayEvents()
})
</script>

<style lang="scss">
.auto-craft {
  .el-input {
    width: 248px;
  }

  .auto-craft-alert {
    max-width: 400px;
    margin-bottom: 8px;
  }
}
</style>