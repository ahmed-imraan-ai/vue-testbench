import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes/index";
import "./style.css";
import App from "./App.vue";

const router = createRouter({
	history: createWebHistory(),
	routes,
});
createApp(App).use(router).mount("#app");
