<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const date = ref(new Date())

const intervalId = setInterval(() => {
  date.value = new Date()
}, 500)
// throw new Error('test')

const time = computed(() => {
  return date.value.toLocaleTimeString()
})

const seconds = computed(() => {
  return date.value.getSeconds()
})

// При таком варианте отрабатывает один раз
// а не при каждой отработке интервала
watch(seconds, () => {
  if (seconds.value % 5 === 0) {
    throw new Error('time error')
  }
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <h1>App</h1>
  <div>
    Time: <span>{{ time }}</span>
  </div>
</template>
