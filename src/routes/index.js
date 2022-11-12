import Home from "@/views/Home.vue";

export const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/emit-example",
		name: "EmitExample",
		component: () => import("@/views/emit-example/Parent.vue"),
	},
	{
		path: "/v-model",
		name: "VModel",
		component: () => import("@/views//v-model/Parent.vue"),
	},
];
export default routes;
