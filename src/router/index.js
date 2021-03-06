import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Home from '@/components/pages/Home'
import Menu from '@/components/pages/Menu'
import Product_details from '@/components/pages/Product_details'
import Pay_step1 from '@/components/pages/PayStep1'
import Payment from '@/components/pages/Payment'
import Main from '../views/main'
Vue.use(Router)

export default new Router({
/* - The above code is defining the routes for the application.
	- The routes are defined in an array of objects.
	- Each object in the array defines a route.
	- The path property defines the path for the route.
	- The component property defines the component that will be rendered when the route is active.
	- The children property defines the child routes for the route.
	- The redirect property defines the route that will be rendered when the path is empty. */
  mode: 'history',
  hash: false,
	routes: [
	{
		path: '/',
		component: Main,
		children: [
		{
			path: '/login', ///path của route
			name: 'login', // tên route
			component: Login // component route sử dụng
		},
		{
			path: '/register', ///path của route
			name: 'register', // tên route
			component: Register // component route sử dụng
		},
		{
			path: '/home', ///path của route
			name: 'home', // tên route
			component: Home // component route sử dụng
		},
		{
			path: '/menu', ///path của route
			name: 'menu', // tên route
			component: Menu // component route sử dụng
		},
		{
			path: '/detail', ///path của route
			name: 'product_details', // tên route
			component: Product_details // component route sử dụng
		},
		{
			path: '/payment', ///path của route
			name: 'payment', // tên route
			component: Payment // component route sử dụng
		},
		{
			path: '/payStep1', ///path của route
			name: 'payStep1', // tên route
			component: Pay_step1 // component route sử dụng
		},
		]
	},
	{
		path: '',
		redirect: '/home'
	},
	]
})
