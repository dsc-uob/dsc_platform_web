<template>
	<v-app>
		<v-main>
			<v-container class="fill-height bg" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="8">
						<v-card elevation="3" :height="step == 1 ? 598 : null">
							<v-window v-model="step">
								<v-window-item :value="1">
									<v-row>
										<v-col cols="12" md="8">
											<v-card-text class="mt-12">
												<h1
													class="text-center display-2 grey--text text--accent-3"
												>
													Sign in to DSC UOB
												</h1>
												<div class="text-center mt-4">
													<v-img
														class="center"
														src="/logo.jpg"
														width="100"
														height="100"
													/>
												</div>
												<!-- logo -->
												<v-form @submit.prevent="login" ref="loginForm">
													<v-text-field
														label="Login"
														prepend-icon="mdi-email"
														type="text"
														color="grey accent-3"
														:rules="loginForm.login.rules"
														v-model="loginForm.login.value"
													/>
													<v-text-field
														label="Password"
														prepend-icon="mdi-lock"
														:type="
															loginForm.password.show ? 'text' : 'password'
														"
														color="grey accent-3"
														:rules="loginForm.password.rules"
														v-model="loginForm.password.value"
														:append-icon="
															loginForm.password.show
																? 'mdi-eye'
																: 'mdi-eye-off'
														"
														@click:append="
															() =>
																(loginForm.password.show = !loginForm.password
																	.show)
														"
													/>
												</v-form>
												<h3 class="text-center mt-3">Forgot your password?</h3>
												<div class="text-center mt-3">
													<v-btn
														:loading="loading"
														@click="login"
														rounded
														color="grey accent-3"
														dark
														>SIGN IN</v-btn
													>
												</div>
											</v-card-text>
										</v-col>
										<v-col
											cols="12"
											md="4"
											class="grey accent-3"
											:class="{ col: !$vuetify.breakpoint.smAndDown }"
										>
											<v-card-text class="white--text mt-12">
												<h1 class="text-center display-1">
													Welcome to Our DSC
												</h1>
												<h5 class="text-center">Don't have an account yet?</h5>
											</v-card-text>
											<div class="text-center">
												<v-btn
													rounded
													outlined
													dark
													@click="step++"
													:disabled="loading"
													>Register</v-btn
												>
											</div>
										</v-col>
									</v-row>
								</v-window-item>
								<v-window-item :value="2">
									<v-row>
										<v-col cols="12" md="4" class="grey accent-3">
											<v-card-text class="white--text mt-12">
												<h1 class="text-center display-1">
													Welcome to Our DSC
												</h1>
												<h5 class="text-center">Already a user?</h5>
											</v-card-text>
											<div class="text-center">
												<v-btn
													rounded
													outlined
													dark
													@click="step--"
													:disabled="loading"
													>Login</v-btn
												>
											</div>
										</v-col>
										<v-col cols="12" md="8">
											<v-card-text class="mt-12">
												<h1
													class="text-center display-2 grey--text text--accent-3"
												>
													Create an account
												</h1>
												<div class="text-center mt-4">
													<v-img
														class="center"
														src="/logo.jpg"
														width="100"
														height="100"
													/>
												</div>
												<v-form ref="registerForm" @submit.prevent="register">
													<v-text-field
														name="name"
														label="Name"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
														:rules="registerForm.name.rules"
														v-model="registerForm.name.value"
														:error-messages="registerForm.name.errors"
														@change="registerForm.name.errors = []"
													></v-text-field>
													<v-text-field
														name="username"
														label="Username"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
														:rules="registerForm.username.rules"
														v-model="registerForm.username.value"
														:error-messages="registerForm.username.errors"
														@change="registerForm.username.errors = []"
													></v-text-field>
													<v-text-field
														name="email"
														label="Email"
														prepend-icon="mdi-email"
														color="grey accent-3"
														type="email"
														:rules="registerForm.email.rules"
														v-model="registerForm.email.value"
														:error-messages="registerForm.email.errors"
														@change="registerForm.email.errors = []"
													></v-text-field>
													<v-text-field
														name="password"
														label="Password"
														prepend-icon="mdi-lock"
														color="grey accent-3"
														:type="
															registerForm.password.show ? 'text' : 'password'
														"
														:rules="registerForm.password.rules"
														v-model="registerForm.password.value"
														:append-icon="
															registerForm.password.show
																? 'mdi-eye'
																: 'mdi-eye-off'
														"
														@click:append="
															() =>
																(registerForm.password.show = !registerForm
																	.password.show)
														"
														:error-messages="registerForm.password.errors"
														@change="registerForm.password.errors = []"
													></v-text-field>
												</v-form>
												<div class="text-center mt-3">
													<v-btn
														:loading="loading"
														@click="register"
														rounded
														color="grey accent-3"
														dark
														>Register</v-btn
													>
												</div>
											</v-card-text>
										</v-col>
									</v-row>
								</v-window-item>
								<v-window-item :value="3">
									<v-row>
										<v-col cols="12" md="12" class="grey accent-3">
											<v-card-text class="white--text mt-12">
												<h1 class="text-center display-1">
													Welcome back {{ user.first_name }}
												</h1>
												<h5 class="text-center">
													You will be redirected to your dashboard. have a nice
													day :)
												</h5>
											</v-card-text>
										</v-col>
									</v-row>
								</v-window-item>
							</v-window>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<v-snackbar v-model="snackbar.show">
				{{ snackbar.text }}
				<template v-slot:action="{ attrs }">
					<v-btn
						text
						:color="snackbar.color"
						v-bind="attrs"
						@click.native="snackbar.show = false"
						>Close</v-btn
					>
				</template>
			</v-snackbar>
		</v-main>
	</v-app>
</template>
<script>
//eslint-disable-next-line
const passwordRegex = /^(?=.*?[A-Za-z-!@#\$&*~])(?=.*?[0-9]).{6,}$/;

export default {
	name: "AuthLayout",
	data: () => ({
		step: 1,
		loginForm: {
			login: {
				rules: [
					(v) => v.length > 5 || "Min. 6 characters.",
					(v) => !!v || "E-mail is required",
					(v) =>
						/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
						/^[a-zA-Z0-9]+$/.test(v) ||
						"Login must be a valid email or username",
				],
				value: "",
			},
			password: {
				rules: [
					(value) =>
						passwordRegex.test(value) ||
						"Min. 6 characters with at least one  number.",
				],
				value: "",
				show: false,
			},
		},
		registerForm: {
			name: {
				rules: [
					(v) => v.length > 3 || "Min. 3 characters.",
					(v) => !!v || "Name is required",
					(v) => /^[a-zA-zء-ي ]*$/.test(v) || "Username must be valid",
				],
				value: "",
				errors: [],
			},
			username: {
				rules: [
					(v) => v.length > 5 || "Min. 6 characters.",
					(v) => !!v || "Username is required",
					(v) => /^[a-zA-Z0-9]+$/.test(v) || "Username must be valid",
				],
				value: "",
				errors: [],
			},
			email: {
				rules: [
					(v) => !!v || "E-mail is required",
					(v) =>
						/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
						"E-mail must be valid",
				],
				value: "",
				errors: [],
			},
			password: {
				rules: [
					(value) =>
						passwordRegex.test(value) ||
						"Min. 6 characters with at least one  number.",
				],
				value: "",
				errors: [],
				show: false,
			},
		},
		loading: false,
		snackbar: {
			show: false,
			text: "",
			color: "success",
		},
		user: {},
	}),
	methods: {
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		async login() {
			if (this.$refs.loginForm.validate()) {
				let { login, password } = this.loginForm;

				try {
					this.loading = true;

					let res = await this.$http.post("user/login/", {
						username: login.value,
						password: password.value,
					});

					this.user = res.data;
					this.step = 3;

					this.$store.dispatch("setToken", res.data.token);

					setTimeout(() => this.$router.push("/"), 1500);
				} catch (err) {
					this.snackbar = {
						show: true,
						text: err.response.data.non_field_errors[0],
						color: "error",
					};
				}
				this.loading = false;
			}
		},
		async register() {
			if (this.$refs.registerForm.validate()) {
				let { email, password, name, username } = this.registerForm;

				try {
					this.loading = true;
					await this.$http.post("user/create/", {
						username: username.value,
						password: password.value,
						first_name: name.value,
						email: email.value,
					});

					this.snackbar = {
						show: true,
						text: "Your account was created successfully, please login.",
						color: "success",
					};

					email.value = "";
					password.value = "";
					name.value = "";
					username.value = "";

					this.step = 1;
				} catch (err) {
					this.registerForm.email.errors =
						err.response.data?.email?.map(this.capitalizeFirstLetter) ?? [];
					this.registerForm.username.errors =
						err.response.data?.username?.map(this.capitalizeFirstLetter) ?? [];
					this.registerForm.name.errors =
						err.response.data?.name?.map(this.capitalizeFirstLetter) ?? [];
					this.registerForm.password.errors =
						err.response.data?.password?.map(this.capitalizeFirstLetter) ?? [];

					this.snackbar = {
						show: true,
						text: "Something went wrong :(",
						color: "error",
					};
				}

				this.loading = false;
			}
		},
	},
};
</script>
<style scoped>
.col {
	height: 598px;
}
.bg {
	/* background: url("/bg-wave.svg") no-repeat center center; */
	background-size: cover;
}
.center {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}
</style>