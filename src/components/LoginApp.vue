<template>
  <div class="column is-half">
    <h1>Inicia sesión</h1>
    <form class="" @submit.prevent="onLogin">
      <div>
        <input type="text" v-model="loginForm.email" placeholder="Email" required>
      </div>
      <div>
        <input type="password" v-model="loginForm.password" placeholder="Contraseña" required>
      </div>
      <br>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import firebase from '../../services/firebase'

export default {
  name: 'LoginApp',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      user: {}
    }
  },
  methods: {
    onLogin () {
      firebase.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
        console.log(user)
      }).catch(error => {
        console.error(error)
      })
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
