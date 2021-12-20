<template>
  <header style="background-image: url('images/Home/running7.jpg'); background-repeat: no-repeat; background-size: cover; height:80vh;">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-dark mt-5">
          <h1>
            Cari Komunitas Olahraga disekitar anda <NuxtLink to="/Community">
              disini
            </NuxtLink>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque fugit iure dolores delectus nam eum ut suscipit impedit minus obcaecati, voluptate tenetur, pariatur iusto, deserunt rerum explicabo quis id!
          </p>
          <!-- <div class="input-group mt-5">
            <input type="text" class="form-control" placeholder="Community Search" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button id="button-addon2" class="btn btn-outline-primary" type="button">
              Search
            </button>
          </div> -->
          <div v-if="isAuthenticated" class="mt-3">
            <p>Hello, {{ loggedInUser.name }}!</p>
          </div>
          <div v-else class="mt-3">
            <NuxtLink to="/Register">
              <a href="" class="btn btn-success">Join Us</a>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6 mt-5 mb-5">
          <!-- <img src="images/Home/running.jpg" width="100%" alt=""> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>
