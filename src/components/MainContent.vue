<template>
	<div class="content clearfix">
		<LeftComponent></LeftComponent>
		<RightComponent></RightComponent>
	</div>
</template>

<script>
	import LeftComponent from "./leftCom/LeftComponent";
	import RightComponent from "./rightCom/RightComponent";

	export default {
		name: "MainContent",
		data () {
			return {

			};
		},
		components: {
			LeftComponent,
			RightComponent
		}
	};
</script>

<style lang="scss">
	.content{
		width: 1024px;
		height: 1300px;
		margin: 50px auto;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

		@media screen and (max-width: 1024px) {
			margin: 0;
			width: 100%;
			height: 1372px;
			border-radius: 0;
			box-shadow: 0 0 0 #000;
		}
	}
</style>