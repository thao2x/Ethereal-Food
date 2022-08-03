<template>
<div>
  <section>
    <div class="main-header">
      <div class="row align-items-center part-menu">
        <div class="logo col-lg-3">
          <a href="#">
            <img src="../../assets/images/logo.png" width="150" alt="OneWeb_Logo">
          </a>
        </div>
        <div class="menu col-lg-6">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active p-3" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-3" href="#">About</a>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'menu'}">
                  <a class="nav-link p-3" href="#">Menu</a>
                </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link p-3" href="#">Contact</a>
            </li>
              <li class="nav-item">
                <router-link :to="{ name: 'login'}">
                  <a class="nav-link p-3" href="#">Login</a>
                </router-link>
            </li>
          </ul>
        </div>
        <div class="icon col-lg-3">
          <a href=""><font-awesome-icon icon="fa-solid fa-magnifying-glass icon_search" class="p-3"/></a>
            <a v-b-toggle.sidebar-right><font-awesome-icon icon="fa-solid fa-cart-arrow-down icon_cart" class="p-3" /></a>
			      <b-sidebar id="sidebar-right" right shadow>
              <h1>Your Cart</h1>
              <div class="cart">
                <div class="cart__left">
                  <p>PRODUCT</p>
                </div>
                <div class="cart__right">
                  <p>PRICE</p>
                  <p>QTY</p>
                  <p>UNIT PRICE</p>
                </div>
              </div>
              <div class="cart__line"></div>
              <div class="cart__items">
                <div class="cart__items__img">
                  <img src="../../assets/images/pizza2.png" alt="">
                  <div class="cart__items__text">
                    <div class="text__1">
                      <h5>Home made pizza 12’</h5>
                      <p>beef patties, Iceberg lettuce, American cheese, pickles, ...</p>
                    </div>
                    <div class="text__2">
                      <p>Added by you</p>
                    </div>
                  </div>
                </div>

                <div class="cart__items__desc">
                  <div class="cart__items__desc--price">
                    <p>$20</p>
                  </div>
                  <div class="quantity">
                      <div class="quantity_minus" @click="uncreament()">-</div>
                      <div class="pro-qty">
                          <input type="text" v-model="count">
                      </div>
                      <div class="quantity_plus" @click="increament()">+</div>
                  </div>
                  <div class="cart__items__desc--unit">
                    <p>$10</p>
                  </div>
                </div>
                
                <div class="cart__items__button">

                </div>
              </div>
            </b-sidebar>

        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>


export default {
name: "app",
components: {

},
data() {
  return {

  };
},
created() {

},
methods: {

},
};
</script>

<style  scoped>
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}
  .modal.left .modal-dialog,
	.modal.right .modal-dialog {
		position: fixed;
		margin: auto;
		width: 320px;
		height: 100%;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
	}

	.modal.left .modal-content,
	.modal.right .modal-content {
		height: 100%;
		overflow-y: auto;
	}
	
	.modal.left .modal-body,
	.modal.right .modal-body {
		padding: 15px 15px 80px;
	}
	.modal.right.fade .modal-dialog {
		right: -320px;
		-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
		   -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
		     -o-transition: opacity 0.3s linear, right 0.3s ease-out;
		        transition: opacity 0.3s linear, right 0.3s ease-out;
	}
	
	.modal.right.fade.in .modal-dialog {
		right: 0;
	}
.main-header{
background-color: #1AC073;
position: fixed;
width: 100%;
z-index: 10;
}
img {
    width: 84px;
}
.part-menu{
height: 80px;
}
.part-menu .menu a{
color: #ffffff;
}
.part-menu .icon a{
color: #ffffff;
}
/* giỏ hàng */
.b-icon.bi {
    color: #1AC073;
}
.b-sidebar > .b-sidebar-body h1{
  color: #1AC073 !important;
  font-size: 32px !important;
  padding-bottom: 20px;
}
.cart{
  display: flex;
  padding: 0 20px 10px 20px;
}
.cart__left{
  width: 65%;
}
.cart__left p{
  text-align: left;
}
.cart__right{
  width: 35%;
  display: flex;
  gap: 15px;
  justify-content: space-around;
}
.cart__line{
  width: 100%;
  height: 3px;
  background-color: #F6F7F8;
  margin-bottom: 40px;
}
.cart__items{
  padding: 0 20px;
  display: flex;
}
.cart__items__img{
  gap: 10px;
  width: 65%;
}
.cart__items__img{
  display: flex;
}
.cart__items__text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text__1{
  text-align: left;
}
.text__1 h5{
  font-size: 14px;
  color: #262626;
}
.text__1 p{
  font-size: 10px;
  color: #929292;
  line-height: 20px;
  width: 60%;
}
.text__2 p{
  color: #929292;
  font-size: 10px;
  text-align: left;
}
.cart__items__desc{
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-between;
}
.quantity {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 7px;
}
.quantity_minus {
    cursor: pointer;
    color: #1AC073;
    font-size: 1.4rem;
}
.quantity_plus {
    cursor: pointer;
    color: #1AC073;
    font-size: 1.4rem;
}
.pro-qty {
}
.pro-qty input {
	color: #1c1c1c;
    width: 35px;
    text-align: center;
}
</style>
