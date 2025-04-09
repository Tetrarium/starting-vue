import { ref } from "vue"

export function useTimeService(delayUpdateTime: number) {
  const now = ref(new Date())

  const updateTime = () => {
    now.value = new Date()
  }

  setInterval(updateTime, delayUpdateTime);

  return {
    now,
  }
}