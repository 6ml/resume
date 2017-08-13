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

<style lang="scss">
body {
	background-color: #dbdbdb;
	-webkit-print-color-adjust: exact;
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

@media print {
	.content {
		width: 970px;
		height: 1372px;
		margin: 0;
		padding: 0;
		border-radius: 0;
		box-shadow: 0 0 0 #000;
		-webkit-print-color-adjust: exact;

		.leftComponent {
			width: 25%;
			height: 100%;
			float: left;
			background-color: #9FC5E8;
			// border-right: 1px solid #000;
		}

		.rightComponent {
			width: 75%;
			float: left;
			padding-top: 50px;

			section {
				margin-bottom: 30px;
			}
		} 
	}
}
</style>
