import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import registerGlobal from "./global";
import router from "./router.js"

const app = createApp(App);


registerGlobal(app);
app.component("app", App);
app.use(router);
app.mount("#app");
