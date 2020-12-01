import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import("../views/Index/Index"),
		children: [
			{
				path: "",
				name: "Home",
				component: () => import('../views/Index/Home.vue')
			}
		]
	},
	{
		path: "/auth",
		name: "Auth",
		component: () => import("../views/Auth/Index"),
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
