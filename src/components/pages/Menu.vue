<template>
	<div>
		<section class="menu">
			<div class="menu_text">
				<p class="home">Home</p>
				<p>/</p>
				<p>{{categories[activeItem].name}}</p>
			</div>
		</section>

		<section class="menu__content">
			<div class="slide__bar">
				<div class="filter">
					<p>Filter</p>
					<div class="filter--child">
						<button type="button" class="button" :class="{ active: isActive(item.value) }" @click="setActive(item.value)" v-for="(item, index) in categories" :key="index">
							{{ item.name }} <p>{{item.number}}</p>
						</button>
					</div>
				</div>
				
				<div class="bar-ranger">
					<p>Price</p>
					<div class="bar-ranger-decs">
						<p>Ranger:</p>
						<span>${{ priceMin }} - ${{priceMax}}</span>
					</div>
					<MultiRangeSlider
						:min="minValue"
						:max="maxValue"
						:step="1"
						:minValue="priceMin"
						:maxValue="priceMax"
						@input="UpdateValues"
					/>
				</div>
				

				<div class="filter">
					<p>Recommend Restaurants</p>
					<div class="filter--child">
						<button type="button" class="button" :class="{ active: isActive1(item.value) }" @click="setActive1(item.value)" v-for="(item, index) in itemx" :key="index">
							{{ item.name }} <p>{{item.number}}</p>
						</button>
					</div>
				</div>
			</div>

			<div class="group_ctn">
				<div class="group__banner">
					<img src="../../assets/images/menu/noodle 1.png" alt="">
					<div class="group__banner--text">
						<h1>Asian Food, a thousand years of culture</h1>
						<p>Performace and design. Taken right to the edge. </p>
					</div>
				</div>
				<div class="group__bar">
					<div class="group__bar--item1">
						<div class="group1">
							<p>13 Items</p>
						</div>
						<div class="group2">
							<p>Sort By</p>
							<b-form-select v-model="selected1" :options="options1"></b-form-select>
						</div>

						<div class="group3">
							<p>Show</p>
							<b-form-select v-model="selected2" :options="options2"></b-form-select>
						</div>
					</div>

					<div class="group__bar--item2">
						<font-awesome-icon icon="fa-solid fa-bars" />
					</div>
				</div>

				<div class="container-t">
					<div class="product" v-for="(item, index) in items" :key="index" >
						<!-- <div v-if="item.offsale!=0">
							<div>{{item.offsale}}</div>
						</div>  -->
						<div class="product__img" >
							<router-link :to="{ name: 'product_details',query: { id: item.id }}">
								<img :src="item.image" alt="">
							</router-link>
						</div>
						<div class="product__desc">
							<div class="product__desc__price">
								<span>{{item.name}}</span>
								<p>{{item.price}}</p>
							</div>
							<div class="product__desc__rate">
								<div class="product__desc__rate__item">
								<div class="item1">
									<font-awesome-icon icon="fa-solid fa-star" />
									<p>{{item.rate}}</p>
								</div>
								<div class="item1">
									<p>{{item.time}}</p>
								</div>
								</div>
								<div class="product__desc__rate__more">
									<a >
										<font-awesome-icon icon="fa-solid fa-plus" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
	export default {
		components: {
			MultiRangeSlider
		},
		data() {
			return {
				//multi-ranger-slider
				minValue: 10,
				maxValue: 300,
				priceMin: 0,
				priceMax: 999,
				//
				activeItem: 1,
				categories: [
					{
						name: "Trending",
						value: 0,
						number: '2',
					},
					{
						name: "Asian",
						value: 1,
						number: '48',
					},
					{
						name: "Indian",
						value: 2,
						number: '14',
					},
					{
						name: "Western",
						value: 3,
						number: '15',
					},
					{
						name: "African",
						value: 4,
						number: '23',
					},
					{
						name: "European",
						value: 5,
						number: '1',
					},
					{
						name: "Middle East",
						value: 6,
						number: '95',
					},
				],
				activeItem1: 1,
				itemx: [
					{
						name: "Bok Choy",
						value: 0,
						number: '99',
					},
					{
						name: "Gai Lai",
						value: 1,
						number: '99',
					},
					{
						name: "Morning Glow",
						value: 2,
						number: '99',
					},
					{
						name: "Okra",
						value: 3,
						number: '99',
					},
				],
				items: [
					{
            			id: 1,
						image: "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip",
						name: "Mixed Salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 2,
						image: "https://img.dominos.vn/Kid-mania.jpg",
						name: "Pizza Eggs",
						price: "$17",
						rate: "5",
						time: "50-60min"
					},
					{
            			id: 3,
						image: "https://149777215.v2.pressablecdn.com/wp-content/uploads/2020/03/dsm-avocado-blueberry-salad-shutterstock_1682267701-1000x667.jpg",
						name: "Avocado & Bulueberry Salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 4,
						image: "https://saigoncantho.com.vn/wp-content/uploads/2021/07/domino-pizza.jpg",
						name: "Pizza Hawaii",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 5,
						image: "https://rosybluhome.com/wp-content/uploads/2013/07/bread-salad-3-1-1000x667.jpg ",
						name: "Grilled garlic bread salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 6,
						image: "https://img.dominos.vn/Extravaganza.jpg",
						name: "Mushrooms",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 7,
						image: "https://img.dominos.vn/pizza-lap-xuong2.jpg",
						name: "Cheese Pizza",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 8,
						image: "https://deifratelli.com/wp-content/uploads/2022/01/Latin-Potato-Salad-1000x667-1.jpg",
						name: "Latin Potato Salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 9,
						image: "https://img.dominos.vn/Veggie-mania.jpg",
						name: "Vegetarian",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 10,
						image: "https://www.recipewinners.com/wp-content/uploads/2019/12/IMG_4086-scaled-1000x667.jpg",
						name: "Mango & Onion Salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 11,
						image: "https://kinhdofood.com/wp-content/uploads/2022/06/Cach-an-Hamburger-hoan-hao-img_62a696f4828d4-1000x667.png",
						name: "Hamburger Avocado",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 12,
						image: "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip",
						name: "Mixed Salad",
						price: "$19",
						rate: "4,7",
						time: "50-79min"
					},
				],
				selected1: null,
				options1: [
					{ value: null, text: "Name" },
					{ value: "a", text: "Price" },
					{ value: "b", text: "Rate" },
				],
				selected2: null,
				options2: [
					{ value: null, text: "12" },
					{ value: "a", text: "9" },
					{ value: "a", text: "6" },
				],
				}
		},
		created (){
			let n = this.maxValue / 4;
			this.priceMin = this.minValue + n;
			this.priceMax = this.maxValue - n;
		},
		methods: {
			isActive: function (menuItem) {
				return this.activeItem === menuItem;
			},
			setActive: function (menuItem) {
				this.activeItem = menuItem; // no need for Vue.set()
			},
			isActive1: function (menuItem) {
				return this.activeItem1 === menuItem;
			},
			setActive1: function (menuItem) {
				this.activeItem1 = menuItem; // no need for Vue.set()
			},
			// ranger slider
			UpdateValues(e) {
				this.priceMin = e.minValue;
				this.priceMax = e.maxValue;
			}
		},
	}
</script>

<style scoped>
	p{
		margin: 0;
	}
	.menu{
		background-color:  #F6F7F8;
		width: 100%;
		height: 83px;
		display: flex;
		justify-content: center;
	}
	.menu_text{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.home{
		color: #1AC073;
	}
	.menu_text p{
		padding: 0 10px;
	}
	.menu__content{
		width: 80%;
		margin: auto;
		display: flex;
		gap: 30px;
		padding-top: 30px;
	}
	/* slide bar */
	.slide__bar{
		width: 20%;
	}
	.filter{
		background-color: #F6F7F8;
		padding: 15px 20px;
		text-align: left;
		border-radius: 5px;
		margin-bottom: 30px;
	}
	.filter--child{
		display: inline-grid;
		width: 100%;
		padding-top: 10px;
	}
	button.button {
		border: none;
		background-color: #F6F7F8;
		display: flex;
		justify-content: space-between;
		padding: 5px 0;
	}
	.active{
		color: #1AC073;
	}
	/* ranger slide */
	.bar-ranger{
		background-color: #F6F7F8;
		padding: 15px 20px;
		text-align: left;
		border-radius: 5px;
		margin-bottom: 30px;
	}
	.bar-ranger-decs{
		display: flex;
		justify-content: space-between;
		padding-top: 15px;
    	margin-bottom: -8px;
	}
	.multi-range-slider {
		box-shadow: none;
		border-radius: unset;
		border: none;
	}
	

	/* group ctn */
	.group_ctn{
		width: 80%;
	}
	/* banner */
	.group__banner{
		position: relative;
	}
	.group__banner img{
		opacity: 0.5;
		width: 100%;
	}
	.group__banner--text{
		position: absolute;
		top: 50px;
		left: 60px;
		width: 50%;
		text-align: left;
	}
	/* bar */
	.group__bar{
		display: flex;
		background-color: #F6F7F8;
		margin: 30px 0 40px 0;
		height: 58px;
		border-radius: 5px;
		padding: 15px 20px;
	}
	.group__bar--item1{
		display: flex;
		gap: 15px;
		width: 80%;
	}
	.group__bar--item2{
		width: 20%;
		text-align: right;
	}
	.group__bar--item1 .group1 {
		display: flex;
		align-items: center;
		width: 10%;
	}
	.group__bar--item1 .group2{
		display: flex;
		gap: 5px;
		align-items: center;
		width: 27%;
	}
	.group__bar--item1 .group2 p{
		width: 50%;
	}
	.group__bar--item1 .group2 select#__BVID__14 {
		width: 50%;
		height: 34px;
	}
	.group__bar--item1 .group3 {
		display: flex;
		gap: 5px;
		align-items: center;
		width: 20%;
	}
	.group__bar--item1 .group3 p{
		width: 45%;
	}
	.group__bar--item1 .group3 select#__BVID__15 {
		width: 50%;
		height: 34px;
	}
	/* product */
	.container-t{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 40px;
		justify-content: space-between;
	}
	.product {
		width: 30.5%;
	}
	.product__img img {
		width: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.product__desc {
		height: auto;
		padding: 20px 15px;
		background-color: #F6F7F8;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.product__desc__price{
		display: flex;
		justify-content: space-between;
		height: 35px;
		font-size: 20px;
	}
	.product__desc__price span {
		font-size: 16px;
	}
	.product__desc__price p {
		font-size: 16px;
	}
	.product__desc__rate {
		display: flex;
		justify-content: space-between;
		height: 35px;
		font-size: 14px;
		align-items: center;
	}
	.product__desc__rate__more {
		width: 22px;
		height: 20px;
		color: #fff;
		background-color: #F3BA00;
		border-radius: 5px;
	}
	.product__desc__rate__more a{
		color: #fff;
	}
	.product__desc__rate__item {
		gap: 15px;
		display: flex;
	}
	.item1 {
		height: 23px;
		display: flex;
		gap: 5px;
		align-items: center;
		padding: 5px;
		background-color: #F7F8FA;
		border: 1px solid #BEBEBE;
		border-radius: 5px;
	}
	.item1 p{
		margin-top: 4px !important;
	}
</style>
