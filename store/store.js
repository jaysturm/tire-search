import Vue from 'vue'
import Vuex from 'vuex'
import * as vehicle from './vehicle.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vehicle
  },
  state: () => {
    return {
      enableVehicleSearch: true
    }
  }
})
