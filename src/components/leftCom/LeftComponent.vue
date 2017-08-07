<template>
	<section class="leftComponent col-sm-3">
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
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		padding: 30px 0;
	}
</style>