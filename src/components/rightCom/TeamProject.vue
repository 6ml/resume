<template>
	<section class="teamProject">
		<header class="header">团队项目</header>
		<div class="teaBlock">
			<header class="clearfix">
				<span class="teaName">头脑风暴</span><span class="teaTime">2016.11 - 2017.01</span><span class="teaJob">前端开发</span>
			</header>
			<p class="teaContent">
				基于<em>React</em>框架结合<em>Redux</em>、<em>Sass</em>等技术完成页面样式、交互效果；使用<em>WebSocket</em>与后端交互，实现即时通信；运用<em>Webpack</em>打包生成项目。为校内实验室完成了一个即时通信网站。了解了<em>单项数据流</em>、<em>组件化开发</em>以及<em>前端工程化</em>。
			</p>
		</div>
		<div class="teaBlock">
			<header class="clearfix">
				<span class="teaName">重庆邮电大学创新创业中心</span><span class="teaTime">2016.07 - 2016.08</span><span class="teaJob">前端开发</span>
			</header>
			<p class="teaContent">
				基于<em>BootStrap</em>框架完成 UI 界面编写；运用<em>jQuery</em>、<em>ajax</em>等技术完成页面交互以及前后端数据交互。实现一个 B/S 结构的在线创业中心管理系统。了解了<em>栅格系统</em>和<em>响应式布局</em>。
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "teamProject",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.teamProject {
		margin-bottom: 20px;

		.teaBlock {
			header {
				text-align: left;
				margin-bottom: 15px;

				.teaName {
					display: inline-block;
					width: 33%;
					font-weight: bold;
					text-align: left;
					float: left;
				}

				.teaTime {
					display: inline-block;
					width: 34%;
					text-align: center;
					float: left;
				}

				.teaJob {
					display: inline-block;
					float: right;
					margin-right: 10px;
					font-size: 12px;
					line-height: 18px;
					border: 1px solid #9FC5E8;
					border-radius: 3px;
					padding: 0 5px;
				}
			}

			.teaContent {
				text-align: left;
				text-indent: 2em;
			}
		}
	}
</style>