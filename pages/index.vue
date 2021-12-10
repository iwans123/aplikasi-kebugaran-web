<template>
  <div>
    <app-navbar />

    <app-header />
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
import Header from '@/components/Home/Header.vue'

export default {
  components: {
    'app-navbar': Navbar,
    'app-header': Header
  }
}
</script>
