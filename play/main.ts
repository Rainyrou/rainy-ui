import { createApp } from "vue";
import App from "./app.vue";
import rainy from "@rainy/components";
const app = createApp(App);
app.use(rainy);
app.mount("#app");
