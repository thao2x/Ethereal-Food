<template>
	<div class="">
		<header-app />
		<banner-app />
		<router-view></router-view>
		<footer-app />
	</div>
</template>
<script>
import Header from "@/components/header/Header";
import Banner from "@/components/content/Banner";
import Footer from "@/components/footer/Footer";


export default {
	name: "main",
	components: {
		"header-app": Header,
		"banner-app": Banner,
		"footer-app": Footer
	},
	data() {
		return {
			header,
			footer
		};
	},
	computed: {
	},
	watch: {

	},
	methods: {

	},
};
</script>
