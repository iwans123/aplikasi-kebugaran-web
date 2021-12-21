<template>
  <div class="container my-4" style="border-radius: 10px ;">
    <div class="row">
      <div class="col-md-5" style="background-color: #181D31">
        <div class="col-12 text-white text-center mb-3 mt-5">
          <h2>Welcome</h2>
        </div>
        <img src="images/Login/welcomeLogin.svg" width="100%" class="mt-5" alt="">
        <div class="mt-5">
          <i class="fab fa-facebook-square text-white m-3" style="font-size: 30px;" />
          <i class="fab fa-instagram text-white m-3" style="font-size: 30px;" />
          <i class="fab fa-twitter text-white m-3" style="font-size: 30px;" />
        </div>
      </div>
      <div class="col-md-7" style="background-color: #E6DDC4;">
        <form class="container my-3 text-dark" method="post" @submit.prevent="login">
          <div class="text-center">
            <h1>Sign-In</h1>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input id="email" v-model="email" type="email" class="form-control" placeholder="Email">
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div id="passwordHelpBlock" class="form-text " />
        </form>
      </div>
      <div>
        <button type="submit" class="btn btn-primary ">
          Login
        </button>
      </div>
      <!-- </form> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  auth: 'guest',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/Dashboard')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
