<template>
  <div class="hello">
    <h1>Inicia sesión</h1>
    <form class="" @submit.prevent="onLogin">
      <div>
        <input type="text" v-model="user.email" placeholder="Email">
      </div>
      <div>
        <input type="password" v-model="user.password" placeholder="Contraseña">
      </div>
      <br>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginApp',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      console.log(this.user)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
