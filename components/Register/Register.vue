<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-4 p-5" style="background-color: #181D31;">
        <div class="col-12 text-white text-center mb-5">
          <h2>Welcome</h2>
        </div>
        <div class="col">
          <img src="images/Register/welcome.svg" width="100%" alt="">
        </div>
        <div class="mt-5 text-center">
          <i class="fab fa-facebook-square text-white m-3" style="font-size: 30px;" />
          <i class="fab fa-instagram text-white m-3" style="font-size: 30px;" />
          <i class="fab fa-twitter text-white m-3" style="font-size: 30px;" />
        </div>
      </div>
      <div class="col-8 p-5 text-dark" style="background-color: #E6DDC4;">
        <form class="row my-3 mx-3" method="post" @submit.prevent="loginForm()">
          <div class="col-12 text-center">
            <h1>Sign-Up</h1>
          </div>
          <div class="col-12">
            <label for="name" class="form-label">Fullname</label>
            <input id="name" v-model="name" name="name" type="text" class="form-control">
          </div>
          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input id="email" v-model="email" name="email" type="email" class="form-control">
          </div>
          <div class="col-12">
            <label for="password" class="form-label">Password</label>
            <input id="password" v-model="password" name="password" type="password" class="form-control">
          </div>
          <div class="col-12">
            <div class="form-check">
              <input id="gridCheck" class="form-check-input" type="checkbox">
              <label class="form-check-label" for="gridCheck">
                I agree to the terms of the Agreement and the Privacy Policy.
              </label>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div class="row mx-3">
          <div class="col-12">
            <span>
              Already an have account ?
            </span>
            <NuxtLink to="/Login">
              <a href="">Sign-In</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data () {
    return {
      error: null,
      name: null,
      email: null,
      password: null,
      status: false
    }
  },

  methods: {
    async loginForm () {
      try {
        await this.$axios.post('/api/user/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
        // eslint-disable-next-line no-console
        console.log('Successful')
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>
