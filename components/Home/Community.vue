<template>
  <div id="community" class="container my-5">
    <!-- <div class="row d-flex flex-wrap">
      <div class="col-md-12 text-center mb-md-5">
        <h2>Community</h2>
      </div>
      <div data-aos="zoom-out-up" class="col-md-6">
        <img src="images/Home/running.jpg" class="card-img-top border" style="height: 300px; width: 500px; border-radius: 25px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">
            Card title
          </h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem! Repellat consequuntur aut, error nulla quae a in, quod exercitationem praesentium nobis nihil similique aperiam sapiente qui voluptatem incidunt saepe?
          </p>
        </div>
      </div>
      <div data-aos="zoom-out-up" class="col-md-6">
        <img src="images/Home/picture1.jpg" class="card-img-top" style="height: 300px; width: 500px; border-radius: 25px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">
            Card title
          </h5>
          <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem in possimus debitis et obcaecati fugit, est laudantium quo sapiente tempore modi doloremque cumque molestias animi commodi molestiae a. Incidunt?
          </p>
        </div>
      </div>
      <div data-aos="zoom-out-up" class="col-md-6">
        <img src="images/Home/picture2.jpg" class="card-img-top" style="height: 300px; width: 500px; border-radius: 25px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">
            Card title
          </h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem! Repellat consequuntur aut, error nulla quae a in, quod exercitationem praesentium nobis nihil similique aperiam sapiente qui voluptatem incidunt saepe?
          </p>
        </div>
      </div>
      <div data-aos="zoom-out-up" class="col-md-6">
        <img src="images/Home/picture3.jpg" class="card-img-top" style="height: 300px; width: 500px; border-radius: 25px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">
            Card title
          </h5>
          <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem in possimus debitis et obcaecati fugit, est laudantium quo sapiente tempore modi doloremque cumque molestias animi commodi molestiae a. Incidunt?
          </p>
        </div>
      </div>
    </div> -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- 1 -->
        <b-carousel-slide img-src="images/Home/picture4.jpg" />

        <!--2 -->
        <b-carousel-slide img-src="images/Home/picture2.jpg" />

        <!-- 3 -->
        <b-carousel-slide img-src="images/Home/picture3.jpg" />

        <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p>
      </b-carousel>
    </div>
  </div>
</template>
<script>
// import AOS from 'aos'
// require('aos/dist/aos.css')

// export default {
//   mounted () {
//     AOS.init()
//   }
// }
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
