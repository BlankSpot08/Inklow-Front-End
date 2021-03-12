import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loginStatus: localStorage.getItem('token') || false,
        supportCategory: []
    },
    getters: {
        getSupportCategory: state => {
            return state.supportCategory.categories
        }
    },
    mutations: {
        updateLoginStatus: (state, payload) => {
            state.loginStatus = payload
        },
        updateSupportCategory: (state, payload) => {
            state.supportCategory = payload
        }
    },
    actions: {
        updateLoginStatus: (context, payload) => {
            context.commit('updateLoginStatus', payload)
        },
        updateSupportCategory: (context, payload) => {
            context.commit('updateSupportCategory', payload)
        }
    }
})
