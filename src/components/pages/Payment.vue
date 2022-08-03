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
                                    <tr v-for="(item, index) in dataCart" :key="index">
                                        <td class="shoping__cart__item">
                                            <img src="../../assets/images/unsplash_60nzTP7_hMQ.png" alt="">
                                            <div class="shoping__cart__item-header">
                                                <h4>{{item.name}}</h4>
                                                <h5>{{item.description}}</h5>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__price">
                                            {{item.afterPrice}}$
                                        </td>
                                        <td class="shoping__cart__quantity">
                                            <div class="quantity">
                                                <div class="quantity_minus" @click="uncreament(item.id)">-</div>
                                                <div class="pro-qty">

                                                    <input type="tet" v-model="dataCart[index].quantity">
                                                </div>
                                                <div class="quantity_plus" @click="increament(item.id)">+</div>
                                            </div>
                                        </td>
                                        <td class="shoping__cart__total">
                                            {{item.price}}$
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
                            <a href="#" class="primary-btn cart-btn">Keep shopping</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                Update cart</a>
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
                                <li>Subtotal  <span> ${{subtotal}}</span></li>
                                <li>Shipping fee <span>$20</span></li>
                                <li>Coupon <span>0</span></li>
<<<<<<< HEAD
                                <li>TOTAL:  <span>$5000</span></li>
=======
                                <li>TOTAL:  <span>${{subtotal-20}}</span></li>
>>>>>>> 81f5574ab86b64421d44b36513bb768e51d05bfe
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#exampleModalLong" class="primary-btn">PAY ALL: ${{subtotal-20}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Modal Payment -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="progress-container">
                    <div class="progress" id="progress"></div>
                    <div class="circle active">1</div>
                  <div class="circle ">2</div>
                  <div class="circle ">3</div>
                  </div>
                </div>
                <form class="payment__form">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                    </div>
                    <div class="form-group col-md-6">
                      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                      <h5 class="pt-2 pb-2 text-left">Select Method of Payment</h5>
                      <ul class="list-group border-0">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Cras justo odio
                          <span><input type="checkbox" class="custom-control-input" id="customControlInline"></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Dapibus ac facilisis in
                          <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Morbi leo risus
                          <span class="badge badge-primary badge-pill">1</span>
                        </li>
                      </ul>
                    </div>
                    <div class="form-group col-md-6">
                      <input type="password" class="form-control address" id="inputPassword4" placeholder="Password">
                      <div class="form-group pt-3">
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default mx-auto">Go to Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
		data() {
      return {
        count: 1,
        dataCart :[
					{
            id: 1,
						image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w",
						name: "Home made pizza 12’",
            quantity: 1,
						price: 10,
            afterPrice: 10,
						description: 'beef patties, Iceberg lettuce, American cheese, pickles, ...'
					},
          {
            id: 2,
						image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w",
						name: "Home made pizza 12’",
            quantity: 1,
            price: 12,
						afterPrice: 12,
						description: 'beef patties, Iceberg lettuce, American cheese, pickles, ...'
					},
          {
            id: 3,
						image: "https://drive.google.com/drive/folders/1lJTnCbfcppROLQbGfsc3aLW15yQCIU8w",
						name: "Home made pizza 12’",
            quantity: 1,
						price: 15,
            afterPrice: 15,
						description: 'beef patties, Iceberg lettuce, American cheese, pickles, ...'
					}
        ],
        subtotal : 0
      };
		},
    mounted(){
      this.SubtotalPlus();
    },
		computed: {
    },
		methods: {
			increament(id){
                var objIndex = this.dataCart.findIndex((obj => obj.id == id));// Tìm kiếm id của món ăn
                if(this.dataCart[objIndex].quantity>=1){
                    this.dataCart[objIndex].quantity++;
                    this.dataCart[objIndex].afterPrice = this.dataCart[objIndex].price * this.dataCart[objIndex].quantity;
                    this.SubtotalPlus();
                }
      },
      uncreament(id){
                var objIndex = this.dataCart.findIndex((obj => obj.id == id));// Tìm kiếm id của món ăn
                if(this.dataCart[objIndex].quantity>1){
                    this.dataCart[objIndex].quantity--;
                    this.dataCart[objIndex].afterPrice=this.dataCart[objIndex].price * this.dataCart[objIndex].quantity;
                    this.SubtotalPlus();
                }
      },
      SubtotalPlus(){
        this.subtotal = 0;
        for (let index = 0; index < this.dataCart.length; index++) {
          this.subtotal += this.dataCart[index].price * this.dataCart[index].quantity;
        }
      }
		},
	};
</script>

<style>
.btn-default{
  background-color: var(--primary-color);
  color: var(--white-color);
}
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
:root{
    --line-fill: #1AC073;
    --line-empty: #e0e0e0;
}

.progress-container {
  width: 150px;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  position: relative;
  margin: 30px auto;
}
.progress-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  background-color: #DFDEDE;
  height: 2px;
  width: 100%;
  transform: translateY(-50%);
  z-index: 0;
}
.progress {
  position: absolute;
  top: 50%;
  left: 0;
  background-color: var(--line-fill);
  height: 4px;
  width: 0%;
  transform: translateY(-50%);
  z-index: -1;
  transition: 0.4s all ease;
}

.circle {
  height: 30px;
  width: 30px;
  background-color: var(--line-empty);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--line-empty);
   transition: 0.4s ease;
   z-index: 1;

}
.circle.active {
  background: #1AC073;
  color: #fff;
  border: 0px;
}
button:disabled {
  cursor: not-allowed;
  background-color: var(--line-empty);
}
@media (min-width: 576px){
  .modal-dialog {
      max-width: 650px;
      margin: 1.75rem auto;
  }
  .payment__form input {
  background: #DFDEDE;
  height: 50px;
  }
  .payment__form .address{
    height: 135px;
  }
}
</style>
