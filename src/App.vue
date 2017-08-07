<template>
	 <!--[if IE]><p class="kill-ie">微软都放弃了IE，为啥你却还不放弃？</p><![endif]--> 
	<div id="app">
		<MainContent></MainContent>
	</div>
</template>

<script>
// import Hello from './components/Hello'
import MainContent from "./components/MainContent";

export default {
	name: "app",
	components: {
		MainContent
	}
};
</script>

<style>
body {
	background-color: #dbdbdb;
}

ul {
	list-style: none;
}

#app {
	/*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
	font-family: Lucida Grande,Hiragino Sans GB,Hiragino Sans GB W3,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
