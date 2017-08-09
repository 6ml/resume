<template>
	<section class="leftComponent">
		<BasicInfo></BasicInfo>
		<Education></Education>
		<Prize></Prize>
		<Evaluation></Evaluation>
	</section>
</template>

<script>
	import BasicInfo from "./BasicInfo";
	import Education from "./Education";
	import Prize from "./Prize";
	import Evaluation from "./Evaluation";

	export default {
		name: "LeftComponent",
		data () {
			return {

			};
		},
		components: {
			BasicInfo,
			Education,
			Prize,
			Evaluation
		}
	};
</script>

<style lang="scss" scoped>
	.leftComponent{
		background-color: #9FC5E8;
		height: 100%;
		color: #FFF;
		width: 25%;
		float: left;
		box-sizing: border-box;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		padding: 30px 0;

		@media screen and (max-width: 1024px) {
			border-radius: 0;
		}

		@media screen and (max-width: 720px) {
			float: none;
			width: 100%;
			height: auto;
		}
	}
</style>