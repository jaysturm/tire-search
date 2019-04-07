import VehicleService from '@/services/NHTSA.service'

export const namespaced = true

const years = []

for (let i = 1983; i <= 2019; i++) {
  years.push(i)
}

export const state = () => {
  return {
    vehicle: {},
    manufacturers: [],
    makes: [],
    models: {},
    years: years
  }
}

export const mutations = {
  ADD_MAKE(state, make) {
    state.makes.push(make)
  },
  ADD_ALL_MAKES(state, makes) {
    state.makes = makes
  },
  ADD_MANUFACTURER(state, manufacturer) {
    state.manufacturers.push(manufacturer)
  },
  ADD_ALL_MANUFACTURERS(state, manufacturers) {
    state.manufacturers = manufacturers
  },
  ADD_MODEL(state, make, model) {
    state.models.push({
      make: make,
      model: model
    })
  },
  SET_VEHICLE(state, vehicle) {
    state.vehicle = vehicle
  }
}

export const actions = {
  fetchMakes({ commit }) {
    VehicleService.getMakes()
      .then(response => {
        console.log(`all makes retrieved =>`)
        console.log(response)
        commit('ADD_ALL_MAKES', response.data.Results)
      })
      .catch(error => {
        console.log(`Error getting makes => ${error.message}`)
      })
  },
  fetchManufacturers({ commit }) {
    VehicleService.getManufacturers()
      .then(response => {
        console.log(`all manufacturers retrieved =>`)
        console.log(response)

        commit('ADD_ALL_MANUFACTURERS', response.data.Results)
      })
      .catch(error => {
        console.log(`Error getting manufacturers => ${error.message}`)
      })
  }
}
