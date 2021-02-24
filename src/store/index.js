import Vue from 'vue'
import Vuex from 'vuex'
import {SETMENU} from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:[]
  },
  mutations: { 
    [SETMENU](state,payload){
      state.menu=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
