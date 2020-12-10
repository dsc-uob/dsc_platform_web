import Vue from 'vue'
import Vuex from 'vuex'
import authModule from "./auth.module"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		authModule
	}
})
