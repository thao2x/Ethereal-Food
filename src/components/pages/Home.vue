<template>
	<div>
		<section>
			<div class="kitchen__section">
				<div class="kitchen__cart">
					<p>Trending today</p>
					<div class="button-group">
						<button type="button" class="button" :class="{active: isActive}" @click="isActive = true">All</button>
						<button type="button" class="button" :class="{active: isActive}" @click="isActive = true">Offers</button>
						<button type="button" class="button" :class="{active: isActive}" @click="isActive = true">Free delivery</button>
						<button type="button" class="button" :class="{active: isActive}" @click="isActive = true">New</button>
						<button type="button" class="button" :class="{active: isActive}" @click="isActive = true">Coming</button>
					</div>
				</div>
				<div>
					<b-form-select v-model="selected" :options="options"></b-form-select>
					<!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
				</div>
			</div>

			<div class="cards__home">
				<b-card-group deck>
					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
						This is a wider card with supporting text below as a natural lead-in to additional content.
						This content is a little bit longer.
						</b-card-text>
						<template #footer>
						<small class="text-muted">Last updated 3 mins ago</small>
						</template>
					</b-card>

					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
						This card has supporting text below as a natural lead-in to additional content.
						</b-card-text>
						<template #footer>
						<small class="text-muted">Last updated 3 mins ago</small>
						</template>
					</b-card>

					<b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
						<b-card-text>
						This is a wider card with supporting text below as a natural lead-in to additional content.
						This card has even longer content than the first to show that equal height action.
						</b-card-text>
						<template #footer>
						<small class="text-muted">Last updated 3 mins ago</small>
						</template>
					</b-card>
				</b-card-group>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive:false,
				selected: null,
				options: [
					{ value: null, text: 'Filters' },
					{ value: 'a', text: 'Trending' },
					{ value: 'b', text: 'Asia' },
					{ value: { C: '3PO' }, text: 'Indian'},
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
	font-style: italic;
	font-size: 22px;
}
/* group button */
.button-group{
	display: inline-flex;
}
.button{
	background-color: #fff;
	color: #929292;
	padding: 13px 40px;
	border: 1px solid #F3BA00 !important;
}
.button:first-child{
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
.button:last-child{
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
.active {
	background-color: #F3BA00;
	color: #000;
}
/*độ dài filter*/
.custom-select {
	width: 250px;
	display: flex;
	border-radius: 10px;
}
/* cards */
.cards__home {
	width: 80%;
	margin: auto;
}
</style>