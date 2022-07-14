<template>
    <div>
        <section class="product-details spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="product__details__pic">
                            <div class="product__details__pic__item">
                                <img class="product__details__pic__item--large"
                                    src="../../assets/images/unsplash_sejqj6Eaqe8.png" alt="">
                            </div>
                            <div class="product__details__pic__slider owl-carousel">
                                <img data-imgbigurl="img/product/details/product-details-3.jpg"
                                    src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                <img data-imgbigurl="img/product/details/product-details-5.jpg"
                                    src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                    src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                    src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                    src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product__details__text">
                            <h3>Home made Pizza</h3>
                            <div class="product__details__rating">
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <span>(243 reviews)</span>
                                <a href="#">Submit a reivew</a>
                            </div>
                            <div class="product__details__separation"></div>
                            <div class="product__details__money">
                                <div class="product__details__price">$299,43</div>
                                <div class="product__details__cost">$534,33</div>
                                <div class="product__details__discount">24% Off</div>
                            </div>
                            <p>Kem Chống nắng Laroche Posay vạch xanh dành cho da dầu - mụn, da nhạy cảm</p>
                            
                            <ul>
                                <li><b>Availability:</b> <span>Active</span></li>
                                <li><b>Category:</b> <span>Pizza</span></li>
                                <li><b>Free shipping:</b> <span>2km</span></li>
                                <div class="product__details__select">
                                    <p>Select Spice Level:</p>
                                    <b-form-select v-model="selected" :options="options"></b-form-select>
                                </div>
                            </ul>
                            <div class="product__details__separation"></div>

                            <div class="product__details__quantity">
                                <div class="quantity">
                                    <div class="pro-qty">
                                        <input type="text" value="1">
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="primary-btn">Add To Cart</a>
                            <a href="#" class="heart-icon"><font-awesome-icon icon="fa-solid fa-heart" /></a>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                        aria-selected="true">Food Description</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                        aria-selected="false">Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                        aria-selected="false">Another tab<span>(1)</span></a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div class="product__details__tab__desc">
                                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>   
                                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Other products from Ethereal Food</h3>

            <div class="container-t">
				<div class="product" v-for="(item, index) in items" :key="index" >
					<!-- <div v-if="item.offsale!=0">
						<div>{{item.offsale}}</div>
					</div>  -->
					<div class="product__img">
						<img to="product_details" src="../../assets/images/home/unsplash_60nzTP7_hMQ.png" alt="">
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
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: null,
                options: [
                { value: null, text: "Large" },
                { value: "a", text: "Medium" },
                { value: "b", text: "Small" },
            ],
            items: [
			{
				image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w", 
				name: "Home made pizza", 
				price: "$19",
				rate: "4,7",
				time: "50-79min"
			},
			{
				image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w", 
				name: "Home made pizza", 
				price: "$17",
				rate: "5",
				time: "50-60min"
			},
			{
				image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w", 
				name: "Home made pizza", 
				price: "$19",
				rate: "4,7",
				time: "50-79min"
			},
			{
				image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w", 
				name: "Home made pizza", 
				price: "$19",
				rate: "4,7",
				time: "50-79min"
			},
            ],
            }
        }
    }

    /*---------------------------------
    Product Details Pic Slider
    ----------------------------------*/
    

    // $( document ).ready(function() {
    //     $(".product__details__pic__slider").owlCarousel({
    //         loop: true,
    //         margin: 20,
    //         items: 5,
    //         dots: true,
    //         smartSpeed: 1200,
    //         autoHeight: false,
    //         autoplay: true
    //     });
    // });


       /*-------------------
		Quantity change
	--------------------- */
    // var proQty = $('.pro-qty');
    // proQty.prepend('<span class="dec qtybtn">-</span>');
    // proQty.append('<span class="inc qtybtn">+</span>');
    // proQty.on('click', '.qtybtn', function () {
    //     var $button = $(this);
    //     var oldValue = $button.parent().find('input').val();
    //     if ($button.hasClass('inc')) {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 0;
    //         }
    //     }
    //     $button.parent().find('input').val(newVal);
    // });
</script>

<style>

.col-lg-6 {
    -ms-flex: 0 0 50%;
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    text-align: left;
}

.product-details {
	padding-top: 80px;
}

.product__details__pic__item {
	margin-bottom: 20px;
}

.product__details__pic__item img {
	min-width: 100%;
}

.product__details__pic__slider img {
	cursor: pointer;
}

.product__details__pic__slider.owl-carousel .owl-item img {
	width: auto;
}

.product__details__text h3 {
	color: #252525;
	font-weight: 700;
	margin-bottom: 16px;
}

.product__details__text .product__details__rating {
	font-size: 14px;
	margin-bottom: 12px;
}

.product__details__text .product__details__rating i {
	margin-right: -2px;
	color: #EDBB0E;
}

.product__details__text .product__details__rating span {
	font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C1C8CE;
	margin-left: 4%;
}

.product__details__text .product__details__rating a {
    padding-left: 4%;
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1AC073;
}

.product__details__text .product__details__separation {
    background: #F6F7F8;
    height: 1px;
    width: 100%;
    margin-bottom: 4%;
}

.product__details__text .product__details__money {
    display: flex;
    align-items: center;
}

.product__details__text .product__details__price {
    width: 84px;
    height: 36px;
	font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0.5px;
    color: #1AC073;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.product__details__text .product__details__select {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-content: space-between;
    width: 70%;
}

.product__details__text .product__details__select p {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #262626;
    margin: 0;
    font-weight: 700;
}

.custom-select {
    width: 50%;
}

.product__details__text .product__details__cost {
    width: 57px;
    height: 21px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
    text-decoration-line: line-through;
    color: #9098B1;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.product__details__text .product__details__discount {
    width: 57px;
    height: 21px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: #F3BA00;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.product__details__text p {
	margin-bottom: 45px;
}

.product__details__text .primary-btn {
	padding: 16px 28px 14px;
	margin-right: 6px;
	margin-bottom: 5px;
}

.product__details__text .heart-icon {
	display: inline-block;
	font-size: 16px;
	color: #6f6f6f;
	padding: 13px 16px 13px;
	background: #f5f5f5;
}

.product__details__text ul {
	border-top: 1px solid #ebebeb;
	padding-top: 40px;
	margin-top: 50px;
}

.product__details__text ul li {
	font-size: 16px;
	color: #1c1c1c;
	list-style: none;
	line-height: 36px;
}

.product__details__text ul li b {
	font-weight: 700;
	width: 170px;
	display: inline-block;
}

.product__details__text ul li span samp {
	color: #dd2222;
}

.product__details__text ul li .share {
	display: inline-block;
}

.product__details__text ul li .share a {
	display: inline-block;
	font-size: 15px;
	color: #1c1c1c;
	margin-right: 25px;
}

.product__details__text ul li .share a:last-child {
	margin-right: 0;
}

.product__details__quantity {
	display: inline-block;
	margin-right: 6px;
}

.pro-qty {
	width: 140px;
	height: 50px;
	display: inline-block;
	position: relative;
	text-align: center;
	background: #f5f5f5;
	margin-bottom: 5px;
}

.pro-qty input {
	height: 100%;
	width: 100%;
	font-size: 16px;
	color: #6f6f6f;
	width: 50px;
	border: none;
	background: #f5f5f5;
	text-align: center;
}

.pro-qty .qtybtn {
	width: 35px;
	font-size: 16px;
	color: #6f6f6f;
	cursor: pointer;
	display: inline-block;
}

.product__details__tab {
	padding-top: 85px;
}

.product__details__tab .nav-tabs {
	border-bottom: none;
	justify-content: center;
	position: relative;
}

.product__details__tab .nav-tabs:before {
	position: absolute;
	left: 0;
	top: 12px;
	height: 1px;
	width: 320px;
	background: #ebebeb;
	content: "";
}

.product__details__tab .nav-tabs:after {
	position: absolute;
	right: 0;
	top: 12px;
	height: 1px;
	width: 320px;
	background: #ebebeb;
	content: "";
}

.product__details__tab .nav-tabs li {
	margin-bottom: 0;
	margin-right: 65px;
}

.product__details__tab .nav-tabs li:last-child {
	margin-right: 0;
}

.product__details__tab .nav-tabs li a {
	font-size: 16px;
	color: #999999;
	font-weight: 700;
	border: none;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	padding: 0;
}

.product__details__tab .product__details__tab__desc {
	padding-top: 44px;
    text-align: left;
}

.product__details__tab .product__details__tab__desc h6 {
	font-weight: 700;
	color: #333333;
	margin-bottom: 26px;
}

.product__details__tab .product__details__tab__desc p {
	color: #666666;
}
.product-details h3{
    padding-top: 80px;
    padding-bottom: 50px;
}
/* product */
	.container-t{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		width: 80%;
		margin: auto;
		gap: 30px;
        padding-bottom: 80px;
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
		padding: 20px 24px;
		background-color: #fff;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
        background-color: #F7F8FA;
	}
	.product__desc__price{
		display: flex;
		justify-content: space-between;
		height: 35px;
		font-size: 20px;
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
    p{
		margin: 0;
	}
</style>