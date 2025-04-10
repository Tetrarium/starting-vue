import { createApp } from 'vue'
import App from './App.vue'
import { useTimeService } from './services/time'
import vueDevTools from 'vite-plugin-vue-devtools'

const { now } = useTimeService(500);
export const useNow = () => now;

const app = createApp(App);

app.config.errorHandler = (...args) => {
  console.error(...args)
}

app.use(vueDevTools);

app.mount('#app')
