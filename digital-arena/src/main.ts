import { createApp } from "vue";
import { createPinia } from "pinia";
import "primevue/resources/themes/lara-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

// Manual Imports
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

// Declare components
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);

app.mount("#app");
