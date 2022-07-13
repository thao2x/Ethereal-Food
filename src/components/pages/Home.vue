<template>
	<div>
		<section>
			<div class="kitchen__section">
				<div class="kitchen__cart">
					<p>Trending today</p>
					<div class="button-group">
					<button type="button" class="button" :class="{ active: isActive(item.value) }" @click="setActive(item.value)" v-for="(item, index) in categories" :key="index">
						{{ item.name }}
					</button>
				</div>
			</div>
			<div>
				<b-form-select v-model="selected" :options="options"></b-form-select>
				<!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
			</div>
			</div>

			<div class="container">
				<div class="product">
					<div class="product__img">
						<img src="https://static.hanet.ai/face/employee/8011/f9d38481-845e-406b-9969-74800c15f621.jpg" alt="">
					</div>
					<div class="product__desc">
						<div class="product__desc__price">
							<span>pizza</span>
							<p>$19</p>
						</div>
						<div class="product__desc__rate">
							<div class="product__desc__rate__item">
							<div class="item1">
								<font-awesome-icon icon="fa-solid fa-star" /> 
								<p>4.7</p>
							</div>
							<div class="item1">
								<p>75min</p>
							</div>
							</div>
							<div class="product__desc__rate__more">
								<font-awesome-icon icon="fa-solid fa-plus" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container1">
			<div class="item item-1" v-for="(item, index) in itemx" :key="index">
				{{ item.number }}
			</div>
			</div>

			<div class="button__more">
			<button type="button" class="button__load">+ Load more...</button>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
		return {
			activeItem: 0,
			categories: [
			{
				name: "ALL",
				value: 0,
			},
			{
				name: "Offers",
				value: 1,
			},
			{
				name: "Free delivery",
				value: 2,
			},
			{
				name: "New",
				value: 3,
			},
			{
				name: "Coming",
				value: 4,
			},
			],
			selected: null,
			options: [
			{ value: null, text: "Filters" },
			{ value: "a", text: "Trending" },
			{ value: "b", text: "Asia" },
			{ value: { C: "3PO" }, text: "Indian" },
			{ value: "d", text: "Western" },
			{ value: "d", text: "African" },
			{ value: "d", text: "European" },
			{ value: "d", text: "Middle East" },
			],

			itemx: [
			{
				number: 1,
			},
			{
				number: 2,
			},
			{
				number: 3,
			},
			{
				number: 4,
			},
			{
				number: 5,
			},
			],
		};
		},
		computed: {},
		methods: {
			isActive: function (menuItem) {
				return this.activeItem === menuItem;
			},
			setActive: function (menuItem) {
				this.activeItem = menuItem; // no need for Vue.set()
			},
		},
	};
</script>

<style scoped>
	section {
		background-color: #F7F8FA;
	}
	.kitchen__section {
		padding-top: 80px;
		padding-bottom: 40px;
		width: 80%;
		margin: auto;
	}
	.kitchen__cart {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 30px;
	}
	.kitchen__cart p {
		font-style: italic;
		font-size: 22px;
	}
	/* / group button /  */
	.button-group {
		display: inline-flex;
	}
	.button {
		background-color: #fff;
		color: #929292;
		padding: 13px 40px;
		border: 1px solid #f3ba00 !important;
	}
	.button:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.button:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.active {
		background-color: #f3ba00;
		color: #000;
	}
	/*độ dài filter*/
	.custom-select {
		width: 250px;
		display: flex;
		border-radius: 10px;
	}

	/* product */
	.container{
		display: flex;
	}
	.product__img img {
		width: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.product__desc {
		height: auto;
		padding: 20px 24px;
		background-color: #fff;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.product__desc__price{
		display: flex;
		justify-content: space-between;
	}
	.product__desc__rate {
		display: flex;
		justify-content: space-between;
	}
	.product__desc__rate__more {
		width: 22px;
		height: 20px;
		background-color: #F3BA00;
		border: 1px solid #BEBEBE;
	}
	.product__desc__rate__item {
		display: flex;
	}
	.item1 {
		display: flex;
	}
	/* load more */
	.button__more {
		padding-bottom: 50px;
	}
	.button__load {
		padding: 13px 30px 13px 19px;
		border: 1px solid #f3ba00;
		border-radius: 10px;
		font-size: 16px;
		color: #929292;
		background-color: #fff;
	}
	.container1 {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.item {
		font-size: 2rem;
		line-height: 1;
		text-align: center;
		padding: 3rem;
		background: mistyrose;
		border: 3px solid tomato;
		color: tomato;
		margin: 6px;
	}
</style>