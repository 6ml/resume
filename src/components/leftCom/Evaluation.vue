<template>
	<div class="evaluation">
		<ul class="evaContent">
			<li class="evaItem">热爱前端，喜欢钻研，乐于尝试</li>
			<li class="evaItem">踏实刻苦，对待工作认真负责</li>
			<li class="evaItem">有良好的团队意识和沟通能力</li>
			<li class="evaItem">做事沉稳，不浮躁，热爱生活</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Evaluation",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.evaluation{
		padding: 30px 15px 0;

		.evaContent{
			padding: 0 0 0 20px;
			font-size: 14px;
			line-height: 30px;
			text-align: left;

			.evaItem {
				position: relative;

				&::before {
					content: " ";
					display: block;
					position: absolute;
					left: -15px;
					top: 14px;
					width: 4px;
					height: 2px;
					border-radius: 50%;
					background-color: #FFF;
				}
			}
		}
	}
</style>