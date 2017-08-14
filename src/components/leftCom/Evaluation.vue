<template>
	<div class="evaluation">
		<ul class="evaContent">
			<li class="evaItem" v-for="(evaItem, index) in evaList" :key="index">{{evaItem}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Evaluation",
		data () {
			return {
				evaList: [
					"热爱前端，喜欢钻研，乐于尝试",
					"踏实刻苦，对待工作认真负责",
					"有良好的团队意识和沟通能力",
					"做事沉稳，不浮躁，热爱生活"
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	.evaluation{
		padding: 30px 15px 0;

		@media print {
			border-top: 1px dashed #F0F0F0;
		}

		.evaContent{
			padding: 0 0 0 20px;
			font-size: 14px;
			line-height: 30px;
			text-align: left;

			@media screen and (max-width: 720px) {
				padding: 0;
				text-align: center;
			}

			.evaItem {
				position: relative;

				@media print {
					-webkit-print-color-adjust: exact;
					color: #FFF !important;
				}

				&::before {
					content: " ";
					display: block;
					position: absolute;
					left: -15px;
					top: 14px;
					width: 4px;
					height: 2px;
					border-radius: 50%;
					-webkit-print-color-adjust: exact;
					background-color: #FFF !important;
				}
			}
		}
	}
</style>