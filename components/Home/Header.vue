<template>
  <header class="bg-one-custom" style="height: 100vh;">
    <div class="container">
      <div class="row">
        <div class="col-5 text-dark mt-5 ">
          <h1>Cari Komunitas Olahraga disekitar anda</h1>
          <div class="input-group mt-5">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button id="button-addon2" class="btn btn-outline-primary" type="button">
              Search
            </button>
          </div>
          <div class="mt-3">
            <NuxtLink to="/Register">
              <a href="" class="btn btn-success">Join Us</a>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6 mt-5">
          <img src="images/Home/workout.svg" width="100%" alt="">
        </div>
      </div>
    </div>
  </header>
</template>
