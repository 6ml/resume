<template>
	<div class="content clearfix">
		<section class="basicInfo col-sm-3"></section>
		<section class="detailedInfo col-sm-9"></section>
	</div>
</template>

<script>
	export default {
		name: "MainContent"
	};
</script>

<style lang="scss">
	.content{
		width: 1000px;
		height: 1400px;
		margin: 50px auto;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

		.basicInfo{
			background-color: #dbdbdb;
			height: 100%;
		}
	}
</style>