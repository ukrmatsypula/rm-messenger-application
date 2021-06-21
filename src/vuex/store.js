import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    contacts: [],
    currentUserChat: '',
    chats: [],
  },
  getters: {},
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts
    },
    SET_USER_TO_HEAD(state, user) {
      if (user) {
        state.currentUserChat = user
      } else {
        state.currentUserChat = ''
      }
    },
    SET_CHATS_TO_STORE(store, chats) {
      store.chats = chats
    },
  },
  actions: {
    async FETCH_CONTACTS({ commit }) {
      return await axios
        .get('http://localhost:3000/contacts')
        .then(contacts => {
          commit('SET_CONTACTS_TO_STORE', contacts.data)
        })
    },
    async FETCH_CHATS({ commit }) {
      return await axios.get('http://localhost:3000/chats').then(chats => {
        commit('SET_CHATS_TO_STORE', chats.data)
      })
    },
    SET_USER_TO_HEADER({ commit }, user) {
      commit('SET_USER_TO_HEAD', user)
    },
  },
})

export default store
