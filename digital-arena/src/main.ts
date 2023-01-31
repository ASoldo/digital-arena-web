import { createApp } from "vue";
import { createPinia } from "pinia";
import Particles from "particles.vue3";
import "./app.css";
// import "animate.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Particles);

app.mount("#app");
