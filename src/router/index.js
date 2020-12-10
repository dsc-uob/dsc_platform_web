import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "../store"

Vue.use(VueRouter)

const routes = [
	{
		path: "/auth",
		name: "Auth",
		component: () => import("../views/Auth/Index"),
		meta: {
			requiresAuth: false,
		},
	},
	// {
	// 	path: '/',
	// 	component: () => import("../views/Index/Index"),
	// 	children: [
	// 		{
	// 			path: "",
	// 			name: "Home",
	// 			component: () => import('../views/Index/Home.vue')
	// 		}
	// 	],
	// 	meta: {
	// 		requiresAuth: true,
	// 	},
	// },
	{
		path: "/",
		name: "Dashboard",
		component: () => import("../views/Dashboard/Index"),
		children: [
			{
				path: 'files',
				name: 'DashboardFiles',
				component: () => import('../views/Dashboard/Files')
			}
		],
		meta: {
			requiresAuth: true,
		},
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

const isAuthenticated = () => store.getters.isAuthenticated;

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (isAuthenticated()) {
			next()
			return
		}
		next('/auth')
	}
	next()
})
export default router
