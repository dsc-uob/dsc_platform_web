<template>
	<v-app>
		<pages-core-app-bar />
		<pages-core-view />
	</v-app>
</template>

<script>
export default {
	name: "DashboardIndex",

	components: {
		PagesCoreAppBar: () => import("./components/AppBar"),
		PagesCoreView: () => import("./components/View"),
	},
};
</script>