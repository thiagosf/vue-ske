import Vue from 'vue'
import * as types from './mutation-types'

const state = {
  user: {}
}

const getters = {
  getUser (state) {
    return state.user
  },
  loggedIn (state) {
    return !!state.user.id
  }
}

const actions = {
  auth ({ commit }, data) {
    return Vue.http.post('users/login', data)
      .then((response) => {
        if (response.body.success) {
          let user = response.body.data
          Vue.cookie.set('token', user.token)
          commit(types.LOGIN, user)
          return user
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  recoverPassword ({ commit }, email) {
    return Vue.http.post('users/password/recovery', { email })
    .then(response => {
      return response.body
    })
  },
  checkLogin ({ commit }) {
    let token = Vue.cookie.get('token')
    if (token) {
      let body = { token: token }
      return Vue.http.post('users/token', body)
        .then((response) => {
          if (response.body.success) {
            let user = response.body.data
            Vue.cookie.set('token', user.token)
            commit(types.SUCCESS_TOKEN, user)
            return user
          } else {
            commit(types.INVALID_TOKEN)
          }
        })
        .catch(() => {
          commit(types.INVALID_TOKEN)
        })
    } else {
      commit(types.INVALID_TOKEN)
    }
  },
  logout ({ commit }) {
    return new Promise(resolve => {
      Vue.cookie.delete('token')
      commit(types.LOGOUT)
      return resolve({ success: true })
    })
  },
  createUser ({ commit }, data) {
    return Vue.http.post('users/simple', data)
      .then((response) => {
        return response.body
      })
  },
  updateUser ({ commit, rootGetters }, data) {
    let token = rootGetters.getUser.token
    let formData = new FormData()
    formData.append('token', token)
    for (let i in data) {
      formData.append(i, data[i])
    }
    return Vue.http.put('users', formData)
      .then((response) => {
        let user = response.body.data
        commit(types.LOGIN, user)
        return response.body
      })
  },
  updateUserProfileAttribute ({ commit, rootGetters }, data) {
    let token = rootGetters.getUser.token
    let userData = {
      [`${data.param}`]: data.value
    }
    return Vue.http.put('users', userData, {params: {token}})
      .then((response) => {
        let user = response.body.data
        commit(types.LOGIN, user)
        return response.body
      })
  },
  checkRegistrationToken ({ commit }, token) {
    let options = {
      token: token
    }
    return Vue.http.post('users/check-registration-token', options)
      .then((response) => {
        if (response.body.success) {
          let user = response.body.data
          Vue.cookie.set('token', user.token)
          commit(types.LOGIN, user)
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  },
  changePassword ({ commit }, data) {
    return Vue.http.post('users/password/change', data)
      .then((response) => {
        if (response.body.success) {
          return response.body
        } else {
          throw new Error(response.body.message)
        }
      })
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.user = user
  },
  [types.SUCCESS_TOKEN] (state, user) {
    state.user = user
  },
  [types.INVALID_TOKEN] (state, user) {
    Vue.cookie.delete('token')
    state.user = {}
  },
  [types.LOGOUT] (state) {
    Vue.cookie.delete('token')
    state.user = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
