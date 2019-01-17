<template>
  <div id="app" class="container">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <img src="./assets/logo.png">
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
