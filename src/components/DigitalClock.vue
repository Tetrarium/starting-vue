<script setup lang="ts">
import { computed } from 'vue'
import { useNow } from '../main'

const time = useNow()

const formatPartToTwoDigits = (part: number) => {
  return part.toString().padStart(2, '0')
}

const hours = computed(() => {
  return formatPartToTwoDigits(time.value.getHours())
})

const minutes = computed(() => {
  return formatPartToTwoDigits(time.value.getMinutes())
})

const seconds = computed(() => {
  return formatPartToTwoDigits(time.value.getSeconds())
})
</script>

<template>
  <div class="digital-clock">
    <span class="digital-clock__hour">{{ hours }}</span
    >:<span class="digital-clock__minute">{{ minutes }}</span
    >:<span class="digital-clock__second">{{ seconds }}</span>
  </div>
</template>

<style scoped lang="scss">
.digital-clock {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  &__hour {
    color: red;
  }
  &__minute {
    color: green;
  }

  &__second {
    color: blue;
  }
}
</style>
