<template>
	<div>
		<section>
			<div class="kitchen__section">
				<div class="kitchen__cart">
					<p>Trending today</p>
					<b-button-group>
						<b-button>All</b-button>
						<b-button>Offers</b-button>
						<b-button>Free delivery</b-button>
						<b-button>New</b-button>
						<b-button>Coming</b-button>
					</b-button-group>
				</div>
				<div>
					<b-form-select v-model="selected" :options="options"></b-form-select>
					<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: null,
				options: [
					{ value: null, text: 'Filters' },
					{ value: 'a', text: 'Trending' },
					{ value: 'b', text: 'Asia' },
					{ value: { C: '3PO' }, text: 'Indian' },
					{ value: 'd', text: 'Western'},
					{ value: 'd', text: 'African'},
					{ value: 'd', text: 'European'},
					{ value: 'd', text: 'Middle East'}
				]
			}
		}
	}
</script>

<style scoped>
.kitchen__section{
	padding-top: 80px;
	padding-bottom: 50px;
	width: 80%;
	margin: auto;
}
.kitchen__cart {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-bottom: 30px;
}
.kitchen__cart p{
	font-style: inherit !important;
	font-size: 22px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle), .btn-group > .btn-group:not(:last-child) > .btn {
	background-color: #fff;
	color: #929292;
	border: 1px solid #F3BA00;
}
button.btn.btn-secondary {
	background-color: #F3BA00;
	color: #000;
	border: 1px solid #F3BA00;
}
/*độ dài filter*/
.custom-select {
	width: 250px;
	display: flex;
	border-radius: 10px;
}
</style>