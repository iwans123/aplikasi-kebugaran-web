<template>
  <div id="wrapper">
    <app-sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <app-navbartop />
        <app-search :communities="communities" />
      </div>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; AksiKalistenik 2021</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
// import Community from '@/components/Dashboard/Community/Community.vue'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import NavbarTop from '@/components/Dashboard/NavbarTop.vue'
import Search from '@/components/Dashboard/Community/Search.vue'

export default {
  components: {
    // 'app-community': Community
    'app-sidebar': Sidebar,
    'app-navbartop': NavbarTop,
    'app-search': Search
  },
  async asyncData (context) {
    const { data } = await context.$axios.get('/api/community-data')
    return {
      communities: data
    }
  }
}
</script>
