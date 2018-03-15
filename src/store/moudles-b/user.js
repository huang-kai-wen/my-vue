// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  usercookie from './usercookie'
import  useraxios from './useraxios'
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
    useraxios.axiospost(JSON.stringify(use))
    usercookie.resetuser(use)
      commit("getuser",use)
       
      
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