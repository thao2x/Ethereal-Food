<template>
	<div>
		<section class="menu">
			<div class="menu_text">
				<p class="home">Home</p>
				<p>/</p>
				<p>Asian</p>
			</div>
		</section>

		<section class="menu__content">
			<div class="slide__bar">
				<div class="filter">
					<p>filter</p>
					<div class="filter--child">
						<p>Trending</p>
						<p>2</p>
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
			</div>
		</section>
	</div>
</template>

<script>

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
		gap: 20px;
		padding-top: 30px;
	}
	.slide__bar{
		width: 20%;
	}
	.filter{
		background-color: #F6F7F8;
		padding: 15px 20px;
		text-align: left;
	}
	.filter--child{
		padding-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.group_ctn{
		width: 80%;
	}
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
</style>