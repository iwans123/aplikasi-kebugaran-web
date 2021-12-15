<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-four-custom">
    <div class="container">
      <a class="navbar-brand" href="#">ActionKalistenik</a>
      <b-navbar-toggle target="nav-collapse" />
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button> -->
      <b-collapse id="nav-collapse" class="collapse navbar-collapse" is-nav>
        <nav class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="#">About</a>
          <a class="nav-link" href="#">Community</a>
          <span v-if="isAuthenticated">
            <a href="" class="nav-link" @click="logout">Logout</a>
          </span>
          <span v-else>
            <NuxtLink to="/login">
              <a href="" class="nav-link">Login</a>
            </NuxtLink>
          </span>
        </nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
