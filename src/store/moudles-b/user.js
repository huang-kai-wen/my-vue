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
  user: {}
  
}
const mutations = {
  getuser (state, use) {
    state.user = use
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
  getusesee: function(state  ){ return state.usesee }
} 

const actions = {
  resetuser ({ commit },use) {
     usercookie.resetuser(use)
     commit("getuser",use)
     console.log(use.username)
     axios.post('http://192.168.0.5:3000/123',JSON.stringify({name:use.username,password:use.password})) 
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
 toogleusestate ({ commit },item) {
    commit("toogle",  item )
  }
 } 
export default {
  state,
  getters,
  actions,
 mutations
} 