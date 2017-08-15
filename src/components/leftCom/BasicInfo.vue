<template>
	<div class="basicInfo">
		<h1 class="name">{{name}}</h1>
		<h3 class="intention">{{intention}}</h3>
		<section class="conntactInfo">
			<ul class="contact">
				<li class="contactItem" v-for="(contactItem, index) in contactList" :key="index"><a target="_blank"><i :class="contactItem.icon"></i><span>{{contactItem.content}}</span></a></li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name: "BasicInfo",
		data () {
			return {
				name: "陆浩",
				intention: "Web 前端开发",
				contactList: [
					{
						icon: "fa fa-home",
						content: "blog.lupath.com",
						href: "http://blog.lupath.com"
					},
					{
						icon: "fa fa-phone",
						content: "15803040109",
						href: "tel:15803040109"
					},
					{
						icon: "fa fa-envelope",
						content: "15803040109@163.com",
						href: "mailto:15803040109@163.com"
					},
					{
						icon: "fa fa-github",
						content: "github.com/6ml",
						href: "https://github.com/6ml"
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	.basicInfo {
		padding: 0;
		box-sizing: border-box;

		.name {
			letter-spacing: 0.3em;

			@media print {
				-webkit-print-color-adjust: exact;
				color: #FFF !important;
			}
		}

		.intention {
			padding-bottom: 30px;
			border-bottom: 1px dashed #F0F0F0;

			@media print {
				-webkit-print-color-adjust: exact;
				color: #FFF !important;
			}
		}

		.conntactInfo{
			padding: 10px 10px 20px 25px;
			border-bottom: 1px dashed #F0F0F0;

			@media print {
				padding-top: 15px;
				border-top: 1px dashed #F0F0F0;
			}

			@media screen and (max-width: 1024px) {
				padding: 10px 0 20px;
			}

			.contact {
				padding: 0;
				@media screen and (max-width: 720px) {
					padding: 10px 0 20px;
					margin: 0 auto;
					width: 205px;
				}

				.contactItem{
					text-align: left;
					line-height: 21px;

					a {
						color: #fff;

						&:hover, &:active {
							text-decoration: underline;
						}
					}

					i {
						display: inline-block;
						width: 50px;
						line-height: 21px;
						font-size: 15px;
						text-align: center;
						-webkit-print-color-adjust: exact;
						color: #FFF !important;

						&::before {
							-webkit-print-color-adjust: exact;
							color: #FFF !important;
						}
					}

					span {
						display: inline-block;
						text-align: left;
						vertical-align: center;

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