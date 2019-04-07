import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles/',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMakes() {
    return apiClient.get('getallmakes?format=json')
  },
  getManufacturers() {
    return apiClient.get('getallmanufacturers?format=json')
  }
}
