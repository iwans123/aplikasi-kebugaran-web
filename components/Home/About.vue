<template>
  <div class="container">
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
        <h2>hallo</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quaerat dolores architecto quisquam, autem adipisci temporibus voluptatibus commodi itaque voluptate esse asperiores natus ut laboriosam repellendus. Facere sapiente doloremque consequatur.</p>
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
