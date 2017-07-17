import * as types from './mutation-types'

const state = {
  message: null,
  type: null
}

const getters = {
  getNotification: (state) => {
    return {
      message: state.message,
      type: state.type
    }
  }
}

const actions = {
  notify: ({ commit }, notification) => {
    commit(types.NOTIFY, notification)
  },
  cleanNotification: ({ commit }, notification) => {
    commit(types.CLEAN_NOTIFICATION)
  }
}

const mutations = {
  [types.NOTIFY] (state, notification) {
    Object.assign(state, notification)
  },
  [types.CLEAN_NOTIFICATION] (state) {
    state.message = null
    state.type = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
