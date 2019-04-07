<template>
  <section>
    <div class="columns is-mobile is-centered">
      <div id="tree-col" class="column is-narrow">
        <figure class="image">
          <img src="../static/tire-swing-silhouette-small.png" />
        </figure>
      </div>
      <div id="logo-title" class="column is-narrow">
        <p>Tire Tree</p>
      </div>
    </div>
    <input id="main-search" class="input is-medium" type="text" />
    <div class="search-buttons">
      <VehicleInfo />
    </div>
  </section>
</template>

<script>
import VehicleInfo from '@/components/VehicleInfo'

export default {
  components: {
    VehicleInfo
  }
}
</script>

<style lang="scss" scoped>
section {
  text-align: center;

  .columns {
    margin-top: 10%;

    #tree-col {
      padding-right: 0;
    }

    #logo-title {
      font-family: 'Shadows Into Light', cursive;
      font-size: 3em;
      color: #2e242c;
      padding-left: 0;
      padding-bottom: 0;
      margin-top: 40px;
    }
  }

  #main-search {
    width: 50%;
  }
}
</style>
