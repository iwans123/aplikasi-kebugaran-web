<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-four-custom">
    <div class="container">
      <a class="navbar-brand" href="#"><i class="fas fa-dumbbell" /></a>
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
          <a id="to-about-us" class="nav-link" href="#about">About</a>
          <span v-if="isAuthenticated">
            <NuxtLink to="/Dashboard">
              <a href="" class="nav-link">Dashboard</a>
            </NuxtLink>
          </span>
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
  mounted () {
    function getElementY (query) {
      return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
    }
    function doScrolling (element, duration) {
      const startingY = window.pageYOffset
      const elementY = getElementY(element)
      const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
      const diff = targetY - startingY
      const easing = function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
      let start

      if (!diff) { return }
      window.requestAnimationFrame(function step (timestamp) {
        if (!start) { start = timestamp }
        const time = timestamp - start
        let percent = Math.min(time / duration, 1)
        percent = easing(percent)
        window.scrollTo(0, startingY + diff * percent)
        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    }
    document.getElementById('to-about-us').addEventListener('click', doScrolling.bind(null, '#about-us', 1500))
  },

  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
