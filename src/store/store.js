import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loginStatus: localStorage.getItem('token') || false
    },
    getters: {

    },
    mutations: {
        updateLoginStatus(state, payload) {
            state.loginStatus = payload
        }
    },
    actions: {
        updateLoginStatus(context, payload) {
            context.commit('updateLoginStatus', payload)
        }
    }
})