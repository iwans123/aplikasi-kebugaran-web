<template>
  <div id="about-us" class="container my-5">
    <div class="row">
      <div class="col-12 text-center mb-5">
        <h2>About Us</h2>
      </div>
      <div
        class="col-md-6"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src="images/Home/Coach.gif" alt="">
      </div>
      <div
        class="col-md-6"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2>hallo,</h2>
        <p>Kami hadir disini untuk memudahkan teman - teman sekalian mendapatkan info tentang komunitas olahraga kalistenik disekitar kalian. Tujuan dari hadirnya kami disini untuk memajukan olahraga kalistenik Indonesia dengan membantu komunitas kalistenik diberbagai daerah menyampaikan informasi komunitasnya.</p>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
require('aos/dist/aos.css')

export default {
  mounted () {
    AOS.init()
  }
}
</script>
