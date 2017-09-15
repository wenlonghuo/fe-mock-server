import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import project from './modules/project.js'
import api from './modules/api.js'
import log from './modules/log.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const state = {
  actionBar: '',
  breadList: [],
  collectorToast: [],
}

const mutations = {
  SET_ACTIONBAR: (state, val) => {
    state.actionBar = val
  },
  SET_BREADLIST: (state, val) => {
    let data = val.map(item => {
      if (typeof item === 'string') {
        return {
          name: item,
          href: -1,
        }
      }
      return item
    })
    state.breadList = data
  },
  COLLECTOR_TOAST: (state, val) => {
    state.collectorToast.push(val.data)
  },
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    project,
    log,
    api,
  },
  strict: debug,
})
