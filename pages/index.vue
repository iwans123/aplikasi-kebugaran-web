<template>
  <div>
    <app-navbar />

    <app-header />

    <app-about />

    <app-community />

    <app-footer />
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
import Header from '@/components/Home/Header.vue'
import Community from '@/components/Home/Community.vue'
import About from '@/components/Home/About.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  components: {
    'app-navbar': Navbar,
    'app-header': Header,
    'app-community': Community,
    'app-about': About,
    'app-footer': Footer
  },
  auth: 'guest'
}
</script>
