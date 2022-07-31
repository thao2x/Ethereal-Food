<template>
	<div id="app">
	 <router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
:root {
	--primary-color: #1AC073;
	--white-color: #ffffff;
}
body {
	font-family: 'ABeeZee', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	scroll-behavior: smooth ;
}
</style>
