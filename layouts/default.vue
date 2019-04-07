<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTree, faRing, faSeedling } from '@fortawesome/free-solid-svg-icons'

library.add(faTree)
library.add(faSeedling)
library.add(faRing)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  components: {
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Tire Search',
      title: 'Tire Tree',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
            Compare tire installation prices from local shops.
          `
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico');
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
