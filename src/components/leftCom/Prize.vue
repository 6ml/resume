<template>
	<div class="prize">
		<ul class="priContent">
			<li class="prizeItem" v-for="(prizeItem, index) in prizeList" :key="index">
				<p class="prizeName">{{prizeItem.name}}</p>
				<p class="prizeInfo"><span class="prizeTime">{{prizeItem.time}}</span><span class="matchLevel">{{prizeItem.matchLevel}}</span><span class="prizeLevel">{{prizeItem.prizeLevel}}</span></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "prize",
		data () {
			return {
				prizeList: [
					{
						name: "第二届\"江南之星\"创业大赛",
						time: "2016-11",
						matchLevel: "市级",
						prizeLevel: "三等奖"
					},
					{
						name: "第一届\"锐明杯\"科技竞赛",
						time: "2017-06",
						matchLevel: "校级",
						prizeLevel: "三等奖"
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	.prize {
		padding-top: 5px;
		border-bottom: 1px dashed #F0F0F0;

		@media print {
			border-top: 1px dashed #F0F0F0;
		}

		.priContent {
			padding: 0 10px 5px;

			.prizeItem {
				margin-top: 25px;

				&:first-child {
					margin-top: 20px;
				}

				.prizeName {
					font-size: 16px;
					margin: 10px 0 5px;

					@media print {
						-webkit-print-color-adjust: exact;
						color: #FFF !important;
					}
				}

				.prizeInfo {
					margin: 0 0 10px;

					.prizeTime, .matchLevel, .prizeLevel {
						display: inline-block;
						margin: 0 3px;

						@media print {
							-webkit-print-color-adjust: exact;
							color: #FFF !important;
						}
					}
				}
			}
		}
	}
</style>