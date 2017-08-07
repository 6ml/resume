<template>
	<div class="basicInfo">
		<h1 class="name">陆浩</h1>
		<h3 class="intention">Web 前端开发</h3>
		<section>
			<ul class="contact">
				<li class="contactItem"><a href=""><icon class="icon" name="home"></icon><span>blog.lupath.com</span></a></li>
				<li class="contactItem"><a href=""><icon class="icon" name="phone"></icon><span>15803040109</span></a></li>
				<li class="contactItem"><a href=""><icon class="icon" name="envelope"></icon><span>15803040109@163.com</span></a></li>
				<li class="contactItem"><a href=""><icon class="icon" name="github"></icon><span>github.com/6ml</span></a></li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name: "BasicInfo"
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

		.contact {
			padding: 10px 10px 20px 25px;
			border-bottom: 1px dashed #F0F0F0;

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
</style>