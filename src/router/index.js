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
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("../views/Dashboard/Index"),
		children: [
			{
				path: 'files',
				name: 'DashboardFiles',
				component: () => import('../views/Dashboard/Files')
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
