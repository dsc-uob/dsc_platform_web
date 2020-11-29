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
		children: [
			{
				path: "login",
				name: "Login",
				component: () => import('../views/Auth/Login.vue')
			},
			{
				path: "register",
				name: "Register",
				component: () => import('../views/Auth/Register.vue')
			},
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
