<template>
	<v-app>
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="8">
						<v-card elevation="12">
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
												<div class="text-center mt-4"></div>
												<!-- logo -->
												<v-form>
													<v-text-field
														label="Email"
														prepend-icon="mdi-email"
														type="email"
														color="grey accent-3"
													/>
													<v-text-field
														label="Password"
														prepend-icon="mdi-lock"
														type="password"
														color="grey accent-3"
														append-icon="mdi-eye-off"
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
										<v-col cols="12" md="4" class="grey accent-3">
											<v-card-text class="white--text mt-12">
												<h1 class="text-center display-1">
													Welcome to Our DSC
												</h1>
												<h5 class="text-center">Don't have account yet?</h5>
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
													<!-- logo -->
												</div>
												<v-form>
													<v-text-field
														name="firstName"
														label="First name"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
													></v-text-field>
													<v-text-field
														name="lastName"
														label="Last name"
														prepend-icon="mdi-account"
														color="grey accent-3"
														type="text"
													></v-text-field>
													<v-text-field
														name="email"
														label="Email"
														prepend-icon="mdi-email"
														color="grey accent-3"
														type="email"
													></v-text-field>
													<v-text-field
														name="password"
														label="Password"
														prepend-icon="mdi-lock"
														color="grey accent-3"
														type="password"
														append-icon="mdi-eye-off"
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
		</v-content>
	</v-app>
</template>
<script>
export default {
	name: "AuthLayout",
	data: () => ({
		step: 1,
	}),
};
</script>