<template>
	<section class="rightComponent">
		<Practice></Practice>
		<PersonalProject></PersonalProject>
		<TeamProject></TeamProject>
		<SkillTree></SkillTree>
	</section>
</template>

<script>
	import Practice from "./Practice";
	import PersonalProject from "./PersonalProject";
	import TeamProject from "./TeamProject";
	import SkillTree from "./SkillTree";

	export default {
		name: "rightComponent",
		data () {
			return {

			};
		},
		components: {
			Practice,
			PersonalProject,
			TeamProject,
			SkillTree
		}
	};
</script>

<style lang="scss">
	.rightComponent {
		width: 75%;
		height: 100%;
		float: left;
		box-sizing: border-box;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #FFF;
		padding: 20px 30px;

		@media screen and (max-width: 1024px) {
			// height: auto;
			border-radius: 0;
			overflow: hidden;
		}

		@media screen and (max-width: 720px) {
			height: auto;
			width: 100%;
			float: none;
		}

		.header {
			height: 32px;
			box-sizing: border-box;
			background-color: #EEE;
			padding: 4px 10px;
			border-radius: 16px;
			line-height: 24px;
			width: 110px;
			margin: 10px auto;
			position: relative;

			&::before, &::after {
				content: " ";
				display: block;
				position: absolute;
				top: 15px;
				height: 1px;
				background-color: #EEE;
			}

			&::before {
				left: -299px;
				right: 130px;
			}

			&::after {
				left: 130px;
				right: -299px;
			}
		}

		em {
			display: inline-block;
			border: 1px solid #DBDBDB;
			background-color: #F6F6F6;
			line-height: 16px;
			font-size: 12px;
			color: #444;
			text-indent: 0;
			border-radius: 3px;
			margin: 0 3px;
			padding: 0 3px;
			font-style: normal;
		}
	}
</style>