<template>
	<section class="personalProject">
		<header class="header">个人项目</header>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人博客</span><span class="perTime">2017.06 - 2017.07</span>
			</header>
			<p class="perContent">
				暗杀时间和<em>Vue</em>、<em>VueX</em>爱神的箭按实际的爱神的箭哈萨克的阿萨德静安寺<em>asdas</em>萨哈担惊受恐啊啥到家啊数据库的和爱神的箭哈市就肯定会师大假数据
			</p>
		</div>
		<div class="perBlock">
			<header class="clearfix">
				<span class="perName">个人博客</span><span class="perTime">2017.06 - 2017.07</span>
			</header>
			<p class="perContent">
				暗杀时间和<em>Vue</em>、<em>VueX</em>爱神的箭按实际的爱神的箭哈萨克的阿萨德静安寺<em>asdas</em>萨哈担惊受恐啊啥到家啊数据库的和爱神的箭哈市就肯定会师大假数据
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