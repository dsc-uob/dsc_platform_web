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
												<v-form>
													<v-text-field
														label="Email"
														prepend-icon="mdi-email"
														type="email"
														color="grey accent-3"
														:rules="loginForm.email.rules"
														v-model="loginForm.email.value"
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
													<v-btn rounded color="grey accent-3" dark
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
												<v-btn rounded outlined dark @click="step++"
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
												<v-btn rounded outlined dark @click="step--"
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
												<v-form>
													<v-text-field
														name="name"
														label="Name"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
														:rules="registerForm.name.rules"
														v-model="registerForm.name.value"
													></v-text-field>
													<v-text-field
														name="username"
														label="Username"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
														:rules="registerForm.username.rules"
														v-model="registerForm.username.value"
													></v-text-field>
													<v-text-field
														name="email"
														label="Email"
														prepend-icon="mdi-email"
														color="grey accent-3"
														type="email"
														:rules="registerForm.email.rules"
														v-model="registerForm.email.value"
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
													></v-text-field>
												</v-form>
												<div class="text-center mt-3">
													<v-btn rounded color="grey accent-3" dark
														>Register</v-btn
													>
												</div>
											</v-card-text>
										</v-col>
									</v-row>
								</v-window-item>
							</v-window>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
//eslint-disable-next-line
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export default {
	name: "AuthLayout",
	data: () => ({
		step: 1,
		loginForm: {
			email: {
				rules: [
					(v) => !!v || "E-mail is required",
					(v) =>
						/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
						"E-mail must be valid",
				],
				value: "",
			},
			password: {
				rules: [
					(value) =>
						passwordRegex.test(value) ||
						"Min. 8 characters with at least one capital letter, a number and a special character.",
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
			},
			username: {
				rules: [
					(v) => v.length > 3 || "Min. 3 characters.",
					(v) => !!v || "Username is required",
					(v) => /^[a-zA-Z0-9]+$/.test(v) || "Username must be valid",
				],
				value: "",
			},
			email: {
				rules: [
					(v) => !!v || "E-mail is required",
					(v) =>
						/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
						"E-mail must be valid",
				],
				value: "",
			},
			password: {
				rules: [
					(value) =>
						passwordRegex.test(value) ||
						"Min. 8 characters with at least one capital letter, a number and a special character.",
				],
				value: "",
				show: false,
			},
		},
	}),
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