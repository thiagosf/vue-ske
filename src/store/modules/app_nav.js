const state = {
  list: [
    {
      name: 'dashboard',
      className: 'dashboard',
      icon: 'cog',
      label: 'nav.dashboard'
    }
  ]
}

const getters = {
  getAppNav (state) {
    return state.permited
  }
}

export default {
  state,
  getters
}
