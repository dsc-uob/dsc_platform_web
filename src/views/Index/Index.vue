<template>
	<v-app>
		<nav>
			<AppBar />
		</nav>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
export default {
	name: "HomeLayout",
	components: {
		AppBar,
	},
};
</script>