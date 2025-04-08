<script lang="ts" setup>
import DigitalClock from './components/DigitalClock.vue'
import AnalogClock from './components/AnalogClock.vue'
</script>

<template>
  <header class="header">
    <h1 class="header__title">App</h1>
  </header>
  <main class="main">
    <DigitalClock />
    <AnalogClock />
  </main>
</template>

<style scoped lang="scss">
.header {
  &__title {
    text-align: center;
    font-size: 2.5rem;
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
