<template>
	<div class="basicInfo">
		<h1 class="name">{{name}}</h1>
		<h3 class="intention">{{intention}}</h3>
		<section class="conntactInfo">
			<ul class="contact">
				<li class="contactItem" v-for="(contactItem, index) in contactList" :key="index"><a :href="contactItem.href" target="_blank"><icon class="icon" :name="contactItem.icon"></icon><span>{{contactItem.content}}</span></a></li>
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
						icon: "home",
						content: "blog.lupath.com",
						href: "http://blog.lupath.com"
					},
					{
						icon: "phone",
						content: "15803040109",
						href: "tel:15803040109"
					},
					{
						icon: "envelope",
						content: "15803040109@163.com",
						href: "mailto:15803040109@163.com"
					},
					{
						icon: "github",
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
		}

		.intention {
			border-bottom: 1px dashed #F0F0F0;
			padding-bottom: 30px;
		}

		.conntactInfo{
			padding: 10px 10px 20px 25px;
			border-bottom: 1px dashed #F0F0F0;

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

					.icon {
						display: inline-block;
						vertical-align: text-bottom;
						width: 50px;
						text-align: center;
					}

					span {
						display: inline-block;
						text-align: left;
						vertical-align: center;
					}
				}
			}
		}
	}
</style>