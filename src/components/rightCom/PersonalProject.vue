<template>
	<section class="personalProject">
		<header class="header">个人项目</header>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人主页 · 技术博客</span>
			</header>
			<p class="perContent">
				以<em>blog.lupath.com</em>作为个人域名，基于<em>Jekyll</em>静态网站工具设计并开发了个人博客，用以记录学习上的总结、经验，便于复习、交流。
			</p>
		</div>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人简历</span>
			</header>
			<p class="perContent">
				基于<em>Vue-cli</em>搭建项目，设计并使用 Css 预编译<em>Sass</em>完成页面样式的书写，使用<em>媒体查询</em>实现简单的响应式布局，完成线上版个人简历。
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
				text-indent: 2em;
			}
		}
	}
</style>