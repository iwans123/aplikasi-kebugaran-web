<template>
  <div class="container my-4" style="background-color: #181D31; width: 70%; border-radius: 10px ;">
    <div class="row">
      <div class="col-4 p-5 border">
        <div class="row">
          <div class="col-12 text-white text-center mb-5">
            <h2>Welcome</h2>
          </div>
          <div class="col">
              <img src="images/Register/welcome.svg" width="100%" alt="">
            <i class="fab fa-facebook-square text-white m-3" style="font-size: 30px;" />
            <i class="fab fa-instagram text-white m-3" style="font-size: 30px;" />
            <i class="fab fa-twitter text-white m-3" style="font-size: 30px;" />
          </div>
        </div>
      </div>
      <div class="col-8 p-5" style="background-color: #E6DDC4;">
        <form class="row my-3 mx-3">
          <div class="col-12 text-dark text-center">
            <h1>Sign-Up</h1>
          </div>
          <div class="col-md-6">
            <label for="inputFirstname" class="form-label">Fisrt Name</label>
            <input id="inputFirstname" type="text" class="form-control">
          </div>
          <div class="col-md-6">
            <label for="inputLastname" class="form-label">Last Name</label>
            <input id="inputLastname" type="text" class="form-control">
          </div>
          <div class="col-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input id="inputEmail4" type="email" class="form-control">
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input id="inputPassword4" type="password" class="form-control">
          </div>
          <div class="col-12">
            <label for="inputCity" class="form-label">City</label>
            <input id="inputCity" type="text" class="form-control">
          </div>
          <div class="col-12">
            <div class="form-check">
              <input id="gridCheck" class="form-check-input" type="checkbox">
              <label class="form-check-label" for="gridCheck">
                I agree to the terms of the Agreement and the Privacy Policy.
              </label>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div class="row mx-3">
          <div class="col-12">
            <span>
              Already an have account ?
            </span>
            <NuxtLink to="/Login">
              <a href="">Sign-In</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
