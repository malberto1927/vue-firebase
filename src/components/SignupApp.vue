<template>
  <div>
    <form @submit.prevent="onSignup">
      <div v-show="errorMessage">
        <label for="" class="msg-error">{{errorMessage}}</label>
      </div>
      <div>
        <input type="text" v-model="signupForm.email" placeholder="Email" required>
      </div>
      <div>
        <input type="password" v-model="signupForm.password" placeholder="Contraseña" required>
      </div>
      <div>
        <input type="password" v-model="signupForm.repassword" placeholder="Confirmar contraseña" required>
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
import firebase from '../../services/firebase'

export default {
  name: 'SignupApp',
  data () {
    return {
      signupForm: {
        email: '',
        password: '',
        repassword: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    onSignup () {
      if (this.signupForm.password === this.signupForm.repassword) {
        this.errorMessage = ''

        firebase.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password)
          .then(user => console.log(user))
          .catch(err => console.error(err))
      } else {
        this.errorMessage = 'La confirmación de la consaseña no coincide'
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .msg-error {
    color: red
  }
</style>
