<template>
  <section>
    <div class="columns is-mobile is-centered">
      <div id="tree-col" class="column is-narrow">
        <!-- <h1 class="title">
        Tire Tree
      </h1>
      <h2 class="subtitle">
        Search for tire and local installer combinations
      </h2> -->
        <figure class="image">
          <img src="../static/tire-swing-silhouette-small.png" />
        </figure>
      </div>
      <div id="logo-title" class="column is-narrow">
        <p>Tire Tree</p>
      </div>
    </div>
    <input id="main-search" class="input is-medium" type="text" />
  </section>
</template>

<script>
export default {}
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
