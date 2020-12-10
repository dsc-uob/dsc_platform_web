const token = localStorage.getItem("userToken");

export default {
	state: {
		token
	},
	getters: {
		token({ token }) {
			return token;
		},
		isAuthenticated({ token }) {
			return token !== null;
		}
	},
	mutations: {
		setToken(state, payload) {
			state.token = payload;
		}
	},
	actions: {
		setToken({ commit }, payload) {
			localStorage.setItem("userToken", payload);
			commit("setToken", payload);
		}
	}
};