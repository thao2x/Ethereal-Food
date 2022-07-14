<template>
    <div>
        <section class="shoping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="shoping__product">PRODUCT</th>
                                        <th>PRICE</th>
                                        <th>QTY</th>
                                        <th>UNIT PRICE</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="shoping__cart__item">
                                            <img src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                            <div class="shoping__cart__item-header">
                                                <h4>Home made pizza 12’</h4>
                                                <h5>beef patties, Iceberg lettuce, American cheese, pickles, ...</h5>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__price">
                                            $55.00
                                        </td>
                                        <td class="shoping__cart__quantity">
                                            <div class="quantity">
                                                <div class="quantity_minus" @click="uncreament()">-</div>
                                                <div class="pro-qty">
                                                    <input type="text" v-model="count">
                                                </div>
                                                <div class="quantity_plus" @click="increament()">+</div>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__total">
                                            $110.00
                                        </td>
                                        <td class="shoping__cart__item__close">
                                            <span class="icon_close"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="shoping__cart__item">
                                            <img src="../../assets/images/unsplash_MqT0asuoIcU.png" alt="">
                                            <div class="shoping__cart__item-header">
                                                <h4>Home made pizza 12’</h4>
                                                <h5>beef patties, Iceberg lettuce, American cheese, pickles, ...</h5>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__price">
                                            $39.00
                                        </td>
                                        <td class="shoping__cart__quantity">
                                            <div class="quantity">
                                                <div class="quantity_minus" @click="uncreament()">-</div>
                                                <div class="pro-qty">
                                                    <input type="text" v-model="count">
                                                </div>
                                                <div class="quantity_plus" @click="increament()">+</div>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__total">
                                            $39.99
                                        </td>
                                        <td class="shoping__cart__item__close">
                                            <span class="icon_close"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="shoping__cart__item">
                                            <img src="../../assets/images/unsplash_33GPuoFI7v8.png" alt="">
                                            <div class="shoping__cart__item-header">
                                                <h4>Home made pizza 12’</h4>
                                                <h5>beef patties, Iceberg lettuce, American cheese, pickles, ...</h5>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__price">
                                            $69.00
                                        </td>
                                        <td class="shoping__cart__quantity">
                                            <div class="quantity">
                                                <div class="quantity_minus" @click="uncreament()">-</div>
                                                <div class="pro-qty">
                                                    <input type="text" v-model="count">
                                                </div>
                                                <div class="quantity_plus" @click="increament()">+</div>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__total">
                                            $69.99
                                        </td>
                                        <td class="shoping__cart__item__close">
                                            <span class="icon_close"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__btns">
                            <a href="#" class="primary-btn cart-btn">Tiếp tục mua sắm</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                Cập nhật giỏ hàng</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Voucher</h5>
                                <form action="#">
                                    <input type="text" placeholder="Voucher code">
                                    <button type="submit" class="site-btn">Redeem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__checkout">
                            <h5>Total amount in cart</h5>
                            <ul>
                                <li>Subtotal <span>$4980</span></li>
                                <li>Shipping fee <span>$20</span></li>
                                <li>Coupon <span>0</span></li>
                                <li>TOTAL:  <span>5000</span></li>
                            </ul>
                            <a href="#" class="primary-btn">PAY ALL: 5000</a>
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
			count: 1,
		};
		},
		computed: {},
		methods: {
			increament(){
                if(this.count>=1){
                    this.count++;
                }
            },
            uncreament(){
                if(this.count>1){
                    this.count--;
                }
            },
		},
	};
</script>

<style>
    .shoping-cart {
	padding-top: 80px;
	padding-bottom: 80px;
}

.shoping__cart__table {
	margin-bottom: 30px;
}

.shoping__cart__table table {
	width: 100%;
	text-align: center;
}

.shoping__cart__table table thead tr {
	border-bottom: 1px solid #ebebeb;
}

.shoping__cart__table table thead th {
	font-size: 20px;
	font-weight: 700;
	color: #1c1c1c;
	padding-bottom: 20px;
}

.shoping__cart__table table thead th.shoping__product {
	text-align: left;
}

.shoping__cart__table table tbody tr td {
	padding-top: 30px;
	padding-bottom: 30px;
	border-bottom: 1px solid #ebebeb;
}

.shoping__cart__table table tbody tr td.shoping__cart__item {
    display: flex;
	width: 630px;
	text-align: left;
}

.shoping__cart__table table tbody tr td.shoping__cart__item-header {
    display: block;
}

.shoping__cart__table table tbody tr td.shoping__cart__item h4 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #262626;
}

.shoping__cart__table table tbody tr td.shoping__cart__item h5 {
    color: #1c1c1c;
    display: inline-block;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #929292;
}

.shoping__cart__table table tbody tr td.shoping__cart__item img {
	display: inline-block;
	margin-right: 25px;
	width: 60px;
}

.shoping__cart__table table tbody tr td.shoping__cart__item h5 {
	color: #1c1c1c;
	display: inline-block;
}

.shoping__cart__table table tbody tr td.shoping__cart__price {
	font-size: 18px;
	color: #1c1c1c;
	font-weight: 700;
	width: 100px;
}

.shoping__cart__table table tbody tr td.shoping__cart__total {
	font-size: 18px;
	color: #1c1c1c;
	font-weight: 700;
	width: 110px;
}

.shoping__cart__table table tbody tr td.shoping__cart__item__close {
	text-align: right;
}

.shoping__cart__table table tbody tr td.shoping__cart__item__close span {
	font-size: 24px;
	color: #b2b2b2;
	cursor: pointer;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .quantity {
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .quantity_minus {
    cursor: pointer;
    color: #1AC073;
    font-size: 1.4rem;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .quantity_plus {
    cursor: pointer;
    color: #1AC073;
    font-size: 1.4rem;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity {
	width: 225px;
    /* display: flex; */
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty {
	width: 120px;
	height: 40px;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty input {
	color: #1c1c1c;
    width: 35px;
    text-align: center;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty input::placeholder {
	color: #1c1c1c;
}

.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty .qtybtn {
	width: 15px;
}

.primary-btn.cart-btn {
	color: #6f6f6f;
	padding: 14px 30px 12px;
	background: #f5f5f5;
}

.primary-btn.cart-btn span {
	font-size: 14px;
}

.primary-btn.cart-btn.cart-btn-right {
	float: right;
}

.shoping__discount {
	margin-top: 45px;
}

.shoping__discount h5 {
	font-size: 20px;
	color: #1c1c1c;
	font-weight: 700;
	margin-bottom: 25px;
}

.shoping__discount form input {
	width: 255px;
	height: 46px;
	border: 1px solid #cccccc;
	font-size: 16px;
	color: #b2b2b2;
	text-align: center;
	display: inline-block;
	margin-right: 15px;
}

.shoping__discount form input::placeholder {
	color: #b2b2b2;
}

.shoping__discount form button {
	padding: 15px 30px 11px;
	font-size: 12px;
	letter-spacing: 4px;
    color: #fff;
    border-color: #fff;
	background: #1AC073;
}

.shoping__checkout {
	background: #f5f5f5;
	padding: 30px;
	padding-top: 20px;
	margin-top: 50px;
    text-align: left;
}

.shoping__checkout h5 {
	color: #1c1c1c;
	font-weight: 700;
	font-size: 20px;
	margin-bottom: 28px;
    text-align: center;

}

.shoping__checkout ul {
	margin-bottom: 28px;
}

.shoping__checkout ul li {
	font-size: 16px;
	color: #1c1c1c;
	font-weight: 700;
	list-style: none;
	overflow: hidden;
	/* border-bottom: 1px solid #ebebeb; */
	padding-bottom: 13px;
	margin-bottom: 18px;
}

.shoping__checkout ul li:last-child {
    border-top: 1px solid #ebebeb;
    margin-top: 20px;
}

.shoping__checkout ul li:last-child {
	padding-bottom: 0;
	border-bottom: none;
	margin-bottom: 0;
}

.shoping__checkout ul li span {
	font-size: 18px;
	color: #dd2222;
	float: right;
}

.row .col-lg-6 .shoping__checkout .primary-btn {
	display: block;
	text-align: center;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    background: #1AC073;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 30%);
    border-radius: 10px;
    margin: auto;
    width: 340px;
}
</style>