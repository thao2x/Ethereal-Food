<template>
<div>
  <section>
    <div class="main-header">
      <div class="row align-items-center part-menu">
        <div class="logo col-lg-3">
          <img src="../../assets/images/logo.png" width="150" alt="OneWeb_Logo">
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
            <a href=""><font-awesome-icon icon="fa-solid fa-cart-arrow-down icon_cart" class="p-3" /></a>
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
</style>
