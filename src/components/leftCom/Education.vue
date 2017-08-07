<template>
	<div class="education">
		<h3 class="schoolName">重庆邮电大学</h3>
		<p class="major">· 计算科学与技术 ·</p>
		<p class="major">卓越工程师班</p>
		<p class="time">本科 / 2018 年毕业</p>
	</div>
</template>

<script>
	export default {
		name: "Education",
		data () {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.education {
		border-bottom: 1px dashed #F0F0F0;

		.schoolName {
			margin: 25px 0 20px;
		}

		.major {
			font-size: 16px;
			margin: 5px 0 5px;
		}

		.time {
			margin: 15px 0 20px;
		}
	}
</style>