// Composables
import { createApp } from "vue";
import store from "./store/index.js";
import { registerPlugins } from "@/plugins";
// Components
import App from "./App.vue";

const app = createApp(App);
app.use(store);
registerPlugins(app);

app.mount("#app");
