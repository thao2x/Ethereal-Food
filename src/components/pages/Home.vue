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

			<div class="button__more">
				<button type="button" class="button__load">+ Load more...</button>
			</div>

			<div class="contact">
				<div class="contact_decs">
						<h3>Do you have a question <br> or want to become a seller?</h3>
						<p>Fill this form and our manager will contact you next 48 hours.</p>
					<div class="form_info">
						<div class="form1">
							<input type="text" placeholder="Your Name">
							<input type="text" placeholder="Your e-mail">
						</div>
						<textarea placeholder="Your Messenger" name="Your Messenger" id="" cols="25" rows="7"></textarea>
					</div>
				</div>
				<div class="contact_img">
					<img src="../../assets/images/Food_delivery_cute_man_riding_motorcycles_cartoon_art_illustration 2.png" alt="">
				</div>
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
				name: "All",
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
			{ value: "b", text: "Asian" },
			{ value: { C: "3PO" }, text: "Indian" },
			{ value: "d", text: "Western" },
			{ value: "d", text: "African" },
			{ value: "d", text: "European" },
			{ value: "d", text: "Middile East" },
			],

			items: [
					{
						id: 1,
						image: "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip",
						name: "Mixed Salad",
						price: "$20",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						availability:'Active',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
						id: 2,
						image: "https://img.dominos.vn/Kid-mania.jpg",
						name: "Pizza Eggs",
						price: "$17",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						availability:'Active',
						shipping: '2km',
						category: 'Pizza',
						rate: "5",
						time: "50-60min"
					},
					{
						id: 3,
						image: "https://149777215.v2.pressablecdn.com/wp-content/uploads/2020/03/dsm-avocado-blueberry-salad-shutterstock_1682267701-1000x667.jpg",
						name: "Avocado & Bulueberry Salad",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						availability:'Active',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
						id: 4,
						image: "https://saigoncantho.com.vn/wp-content/uploads/2021/07/domino-pizza.jpg",
						name: "Pizza Hawaii",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						availability:'Active',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
            			id: 5,
						image: "https://rosybluhome.com/wp-content/uploads/2013/07/bread-salad-3-1-1000x667.jpg ",
						name: "Grilled garlic bread salad",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						availability:'Active',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
						id: 6,
						image: "https://img.dominos.vn/Extravaganza.jpg",
						name: "Mushrooms",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						availability:'Active',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
						id: 7,
						image: "https://img.dominos.vn/pizza-lap-xuong2.jpg",
						name: "Cheese Pizza",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						availability:'Active',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
					},
					{
						id: 8,
						image: "https://deifratelli.com/wp-content/uploads/2022/01/Latin-Potato-Salad-1000x667-1.jpg",
						name: "Latin Potato Salad",
						price: "$19",
						sale_price: '$10',
						off_sale: '50%',
						short_description:'Food is one of the best things about life.',
						availability:'Active',
						description:'Food is one of the best things about life. For those of us who are learning English, we probably want to travel and try all of the different foods from other countries. So when we’re telling our friends and family about all of the amazing food we ate, we want to be able to describe it in great detail. Let’s take a look at how we can do just that. ',
						shipping: '2km',
						category: 'Pizza',
						rate: "4,7",
						time: "50-79min"
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
				this.activeItem = menuItem; //
			},
		},
	};
</script>

<style scoped>
	p{
		margin: 0;
	}
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
		width: 25%;
		height: 52px;
		display: flex;
		border-radius: 10px;
	}

	/* product */
	.container-t{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		width: 80%;
		margin: auto;
		gap: 30px;
	}
	.product {
		width: 23%;
	}
	.product__img img {
		width: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.product__desc {
		height: auto;
		padding: 20px 15px;
		background-color: #fff;
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
	/* load more */
	.button__more {
		padding-top: 80px;
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
	/* contact */
	.contact{
		display: flex;
		width: 80%;
    	margin: auto;
		padding: 50px 0 100px 0;
		justify-content: space-between;
	}
	.contact_decs h3 {
		text-align: left;
	}
	.contact_decs p{
		padding-bottom: 35px;
	}
	.form1 {
		display: flex;
		gap: 16px;
		padding-bottom: 20px;
	}
	input[type="text"] {
		width: 50%;
		border: none;
		padding: 9px 20px;
		border-radius: 10px;
		border: 1px solid #bebebe5c;
	}
	textarea {
		width: 100%;
		border: none;
		padding: 9px 20px;
		border-radius: 10px;
		border: 1px solid #bebebe5c;
	}
</style>
