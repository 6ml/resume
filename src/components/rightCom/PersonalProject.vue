<template>
	<section class="personalProject">
		<header class="header">个人项目</header>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人主页 · 技术博客</span>
			</header>
			<p class="perContent">
				以<em>blog.lupath.com</em>作为个人域名，基于<em>Jekyll</em>静态网站工具设计并开发了个人博客，用以记录学习上的总结、经验。
			</p>
		</div>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人简历</span>
			</header>
			<p class="perContent">
				基于<em>Vue-cli</em>搭建项目，使用<em>BootStrap</em>、<em>Sass</em>完成页面 UI 的实现，实现响应式布局。
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "personalProject",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.personalProject {
		margin-bottom: 20px;

		.perBlock {
			header {
				text-align: left;
				margin-bottom: 15px;

				.perName {
					font-weight: bold;
					text-align: left;
				}

				.perTime {
					float: right;
				}
			}

			.perContent {
				text-align: left;
			}
		}
	}
</style>