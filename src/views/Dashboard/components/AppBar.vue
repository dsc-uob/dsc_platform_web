<template>
	<nav>
		<v-app-bar app flat height="85">
			<v-container class="px-0 text-right d-flex align-center">
				<v-toolbar-title
					class="text-uppercase font-weight-light f hidden-xs-only"
					>dashboard</v-toolbar-title
				>
				<template>
					<v-tooltip bottom>
						<!-- view in fullscreen -->
						<!-- <template v-slot:activator="{ attrs, on }">
							<v-btn
								color="secondary"
								dark
								small
								absolute
								bottom
								right
								fab
								v-bind="attrs"
								v-on="on"
							>
								<v-icon>mdi-upload</v-icon>
							</v-btn>
						</template> -->

						<span>Upload</span>
					</v-tooltip>
				</template>
				<v-spacer />
				<v-btn
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					min-height="48"
					min-width="40"
					text
				>
					<v-icon
						:left="$vuetify.breakpoint.mdAndUp"
						size="20"
						v-text="item.icon"
					/>

					<span class="hidden-sm-and-down" v-text="item.text" />
				</v-btn>
			</v-container>
		</v-app-bar>
		<v-navigation-drawer dark app mini-variant permanent expand-on-hover>
			<v-list>
				<v-list-item class="mb-12">
					<v-list-item-action>
						<v-icon>mdi-view-dashboard-outline</v-icon>
					</v-list-item-action>
				</v-list-item>
				<v-list-item class="mb-2" link to="/">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-title>Dashboard home</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */
export default {
	name: "PagesCoreAppBar",

	computed: {
		items() {
			let urls = [
				{
					icon: "mdi-home",
					text: "Home",
					to: "/",
				},
			];
			return urls;
		},
	},
};
</script>
