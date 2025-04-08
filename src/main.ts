import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.errorHandler = (...args) => {
  console.error(...args);
}

const mounted = app.mount("#app");
console.log(mounted);