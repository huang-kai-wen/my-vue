import Vue from 'vue'
import Router from 'vue-router'
import home from './../components/home'
import forgetpassword from './..//components/loginpages/forgetpassword'
import login from './../components/loginpages/login'
import regis from './../components/loginpages/regis'
import user from './../components/user/usedcar '
import about from './../components/about'
import aboutus from './../components/aboutus'
import prodetail from './../components/prodetail'
import product from './../components/home/product'
Vue.use(Router)

export default new Router({
	 mode: 'history',
   redirect: 'aboutus',

  routes: [
    {
      path: '/aboutfarmer',
      name: 'about',
      component: about 
      				
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus 
      				
    }, {
      path: '/',
      name: 'home',
      component: home 
      				
    }, {
      path: '/prodetail',
      name: 'prodetail',
      component: prodetail 
              
    },
   
    {
      path: '/user',
      name: 'user',
      component: user
      				
    }, {
      path: '/product',
      name: 'product',
      component: product 
              
    }, {
      path: '/regis',
      name: 'regis',
      component: regis 
              
    }
  ]
})
