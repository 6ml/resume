<template>
	<section class="skillTree">
		<header class="header">专业技能</header>
		<div class="skillBlock">
			<header>JavaScript</header>
			<ul class="skillContent">
				<li class="skillItem">掌握<em>DOM API</em>、<em>上下文</em>、<em>闭包</em>等 JavaScript 基本概念，熟悉<em>面向对象</em>的 JavaScript</li>
				<li class="skillItem">熟练使用<em>Vue</em>、<em>jQuery</em>、<em>React</em>等框架类库，并有一定的项目实践经验</li>
				<li class="skillItem">熟悉 JavaScript<em>异步编程</em>及简单实现，熟悉<em>Webpack</em>等前端自动化工具，熟悉<em>MockJS</em>模拟数据</li>
				<li class="skillItem">对前端<em>性能优化</em>、<em>前端安全</em>、<em>跨域</em>、<em>ES6</em>等有着较熟练的实践</li>
				<li class="skillItem">熟悉<em>Echart</em>等数据可视化工具，熟练使用<em>ESLint</em>、<em>JsHint</em>等代码校验工具</li>
			</ul>
		</div>
		<div class="skillBlock">
			<header>Html & Css</header>
			<ul class="skillContent">
				<li class="skillItem">熟悉<em>W3C标准</em>、<em>前端语义化</em>、<em>模板引擎</em>、<em>浏览器兼容性</em>，了解<em>Canvas</em>、<em>LocalStorage</em>等 H5 新特性</li>
				<li class="skillItem">熟练使用<em>PhotoShop</em>切图、<em>CSS3</em>属性，熟悉<em>常见页面布局</em>、<em>响应式布局</em></li>
				<li class="skillItem">熟练使用 CSS 预编译技术<em>Sass</em>、<em>Stylus</em></li>
			</ul>
		</div>
		<div class="skillBlock">
			<header>NodeJS</header>
			<ul class="skillContent">
				<li class="skillItem">熟悉<em>NodeJS</em>基本语法、<em>Express</em>框架及<em>MongoDB</em></li>
			</ul>
		</div>
		<div class="skillBlock">
			<header>Others</header>
			<ul class="skillContent">
				<li class="skillItem">熟练使用<em>GIT</em>进行版本控制和代码托管，<em>Markdown</em>进行日常文档写作</li>
				<li class="skillItem">了解 HTTP 、TCP 等协议，了解 Linux 基本命令</li>
				<li class="skillItem">熟悉<em>科学上网</em>，能够<em>阅读英文文档</em></li>
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
				margin-bottom: 5px;

				.skillItem {
					text-align: left;
					text-indent: 2em;
					position: relative;
					line-height: 24px;

					&::before {
						content: " ";
						display: block;
						position: absolute;
						top: 11px;
						left: 15px;
						width: 4px;
						height: 2px;
						border-radius: 2px;
						background-color: #9FC5E8;
					}
				}
			}
		}
	}
</style>