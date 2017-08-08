<template>
	<div class="prize">
		<ul class="priContent">
			<li class="prizeItem">
				<p class="prizeName">第二届"江南之星"创业大赛</p>
				<p class="prizeInfo"><span class="prizeTime">2016-11</span><span class="matchLevel">市级</span><span class="prizeLevel">三等奖</span></p>
			</li>
			<li class="prizeItem">
				<p class="prizeName">第一届"锐明杯"科技竞赛</p>
				<p class="prizeInfo"><span class="prizeTime">2017-06</span><span class="matchLevel">校级</span><span class="prizeLevel">三等奖</span></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "prize",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.prize {
		border-bottom: 1px dashed #EEE;

		.priContent {
			padding: 0 10px 5px;

			.prizeItem {
				margin-top: 25px;

				.prizeName {
					font-size: 16px;
					margin: 10px 0 5px;
				}

				.prizeInfo {
					margin: 0 0 10px;

					.prizeTime, .matchLevel, .prizeLevel {
						display: inline-block;
						margin: 0 3px;
					}
				}
			}
		}
	}
</style>