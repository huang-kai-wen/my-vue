import Vue from 'vue'
import Router from 'vue-router'
import pre from '@/components/predecessor'
import forgetpassword from '@/components/loginpages/forgetpassword'
import login from '@/components/loginpages/login'
import regis from '@/components/loginpages/regis'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'prede',
      component: pre 
      				
    }
  ]
})
