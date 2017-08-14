<template>
	<section class="practice">
		<header class="header">{{title}}</header>
		<div class="praBlock" v-for="(practiceItem, index) in practiceList" :key="index">
			<header class="clearfix">
				<span class="praName">{{practiceItem.name}}</span>
				<span class="praTime">{{practiceItem.time}}</span>
				<span class="praProperty">{{practiceItem.property}}</span>
			</header>
			<p class="praContent" v-html="practiceItem.content">
				
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "practice",
		data () {
			return {
				title: "实践经历",
				practiceList: [
					{
						name: "重庆猪八戒知识产权服务有限公司",
						time: "2017.07 - 至今",
						property: "实习",
						content: "<em>研发中心</em>开发内部业务系统。了解了公司业务开发的基本流程；使用<em>Vue</em>框架结合<em>VueX</em>状态管理开发前端页面；使用<em>NodeJS</em>结合内部框架完成前后端中间层：为前端提供接口，为后端传递数据。通过企业项目实践理解到高性能、代码可维护性的重要性。"
					},
					{
						name: "香樟林工作室",
						time: "2016.03 - 至今",
						property: "校内组织",
						content: "<em>前端组核心成员</em>负责香樟林工作室日常项目前端部分的研发、维护，协同产品、设计、后端小伙伴共同完成整个项目的开发、设计。参与工作室日常技术分享和交流培训。"
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	.practice {
		margin-bottom: 20px;

		.praBlock {
			header {
				text-align: left;
				margin-bottom: 15px;

				.praName {
					display: inline-block;
					font-weight: bold;
					text-align: left;
					float: left;
					width: 33%;
				}

				.praTime {
					display: inline-block;
					width: 34%;
					float: left;
					text-align: center;
				}

				.praProperty {
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

			.praContent {
				text-align: left;
			}
		}
	}
</style>