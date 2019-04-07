<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: { ...mapState({ makes: state => state.vehicle.makes }) },
  created() {
    this.$store.dispatch('vehicle/fetchManufacturers')
    this.$store.dispatch('vehicle/fetchMakes')
  },
  methods: {
    createVehicle() {
      return {
        year: 0,
        make: '',
        model: '',
        version: '' // i.e. XLT, limited, etc
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
