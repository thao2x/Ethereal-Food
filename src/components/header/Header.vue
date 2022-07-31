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
            <a v-b-toggle.sidebar-right><font-awesome-icon icon="fa-solid fa-cart-arrow-down icon_cart" class="p-3" /></a>
			      <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
              <div class="px-3 py-2">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
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
</style>
