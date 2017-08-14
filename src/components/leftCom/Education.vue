<template>
	<div class="education">
		<h3 class="schoolName">{{name}}</h3>
		<p class="major">{{major}}</p>
		<p class="major">{{classes}}</p>
		<p class="time">{{time}}</p>
	</div>
</template>

<script>
	export default {
		name: "Education",
		data () {
			return {
				name: "重庆邮电大学",
				major: "· 计算科学与技术 ·",
				classes: "卓越工程师班",
				time: "本科 / 2018 年毕业"
			};
		}
	};
</script>

<style lang="scss" scoped>
	.education {
		padding: 5px 0 0 0;
		border-bottom: 1px dashed #F0F0F0;

		@media print {
			border-top: 1px dashed #F0F0F0;
		}

		.schoolName {
			margin: 20px 0 20px;

			@media print {
				-webkit-print-color-adjust: exact;
				color: #FFF !important;
			}
		}

		.major {
			font-size: 16px;
			margin: 5px 0 5px;

			@media print {
				-webkit-print-color-adjust: exact;
				color: #FFF !important;
			}
		}

		.time {
			margin: 15px 0 20px;

			@media print {
				-webkit-print-color-adjust: exact;
				color: #FFF !important;
			}
		}
	}
</style>