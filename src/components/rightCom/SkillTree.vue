<template>
	<section class="skillTree">
		<header class="header">专业技能</header>
		<div class="skillBlock">
			<header>JavaScript</header>
			<ul class="skillContent">
				<li class="skillItem">哈哈哈哈哈哈</li>
				<li class="skillItem">哈哈哈哈哈哈</li>
				<li class="skillItem">哈哈哈哈哈哈<em>哈哈</em></li>
			</ul>
		</div>
		<div class="skillBlock">
			<header>Html & Css</header>
			<ul class="skillContent">
				<li class="skillItem">哈哈哈哈哈哈</li>
				<li class="skillItem">哈哈哈哈哈哈</li>
			</ul>
		</div>
		<div class="skillBlock">
			<header>NodeJS</header>
			<ul class="skillContent">
				
			</ul>
		</div>
		<div class="skillBlock">
			<header>Others</header>
			<ul class="skillContent">
				
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: "skillTree",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.skillTree {
		.skillBlock{
			header {
				text-align: left;
				font-size: 14px;
				font-weight: bold;
			}

			.skillContent{
				padding: 0;

				.skillItem {
					text-align: left;
					text-indent: 2em;
					position: relative;

					&::before {
						content: " ";
						display: block;
						position: absolute;
						top: 8px;
						left: 15px;
						width: 4px;
						height: 4px;
						border-radius: 50%;
						background-color: #9FC5E8;
					}
				}
			}
		}
	}
</style>