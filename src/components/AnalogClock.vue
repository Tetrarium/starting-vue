<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const time = ref(new Date())

const updateTime = () => {
  time.value = new Date()
}

const intervalId = setInterval(updateTime, 500)

const secondsDegree = computed(() => {
  return (time.value.getSeconds() / 60) * 360
})

const minutesDegree = computed(() => {
  return (time.value.getMinutes() / 60) * 360
})

const hoursDegree = computed(() => {
  return (time.value.getHours() / 12) * 360
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="analog-clock">
    <div class="analog-clock__axis">
      <div
        class="analog-clock__hour"
        :style="{ transform: `rotate(${hoursDegree}deg) translateY(-45%) translateX(-50%)` }"
      ></div>
      <div
        class="analog-clock__minute"
        :style="{ transform: `rotate(${minutesDegree}deg) translateY(-45%) translateX(-50%)` }"
      ></div>
      <div
        class="analog-clock__second"
        :style="{ transform: `rotate(${secondsDegree}deg) translateY(-45%) translateX(-50%)` }"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.analog-clock {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  &__axis {
    width: 1px;
    height: 1px;
    border-radius: 50%;
    position: relative;
  }

  &__hour {
    width: 0.5rem;
    height: 4rem;
    border: none;
    background-color: red;
    position: absolute;
    bottom: -2rem;
    transform-origin: 0 center;
  }

  &__minute {
    width: 0.35rem;
    height: 4.6rem;
    border: none;
    background-color: green;
    position: absolute;
    bottom: -2.3rem;
    transform-origin: 0 center;
  }

  &__second {
    width: 0.2rem;
    height: 5rem;
    border: none;
    background-color: blue;
    position: absolute;
    bottom: -2.5rem;
    /* left: 50%; */
    transform-origin: 0 center;
  }
}
</style>
