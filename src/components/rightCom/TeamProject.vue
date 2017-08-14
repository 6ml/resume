<template>
	<section class="teamProject">
		<header class="header">{{title}}</header>
		<div class="teaBlock" v-for="(projectItem, index) in projectList" :key="index">
			<header class="clearfix">
				<span class="teaName">{{projectItem.name}}</span><span class="teaTime">{{projectItem.time}}</span><span class="teaJob">{{projectItem.job}}</span>
			</header>
			<p class="teaContent" v-html="projectItem.content">
				
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "teamProject",
		data () {
			return {
				title: "团队项目",
				projectList: [
					{
						name: "云芽智慧门诊系统 · 互联网+",
						time: "2017.03",
						job: "前端开发",
						content: "基于<em>Echart</em>、<em>Webpack</em>的数据可视化互联网+ 参赛项目，将医院的大量数据以更直观的方式展示。使用<em>BootStrap</em>、<em>Sass</em>完成 UI 界面编写；使用<em>Echart</em>实现数据可视化的展示。在项目中负责环境搭建及主要功能的开发。"
					},
					{
						name: "头脑风暴",
						time: "2016.12 - 2017.01",
						job: "前端开发",
						content: "基于<em>React</em>框架结合<em>Redux</em>、<em>Sass</em>等技术完成页面样式、交互效果；使用<em>WebSocket</em>与后端交互，实现即时通信；运用<em>Webpack</em>打包生成项目。为校内实验室完成了一个即时通信网站。了解了<em>单项数据流</em>、<em>组件化开发</em>以及<em>前端工程化</em>。"
					},
					{
						name: "重庆邮电大学创新创业中心",
						time: "2016.07 - 2016.08",
						job: "前端开发",
						content: "基于<em>BootStrap</em>框架完成 UI 界面编写；运用<em>jQuery</em>、<em>ajax</em>等技术完成页面交互以及前后端数据交互。实现一个 B/S 结构的在线创业中心管理系统。了解了<em>栅格系统</em>和<em>响应式布局</em>。"
					}
				]
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