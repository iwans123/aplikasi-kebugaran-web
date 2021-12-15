<template>
  <!-- <div class="row">
    <div class="col-md-2 bg-four-custom">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div>
          <b-button
            v-b-toggle.sidebar-variant
            class="navbar-toggler"
          >
            <span class="navbar-toggler-icon" />
          </b-button>
          <a class="navbar-brand" href="#">Navbar</a>
          <hr>
          <b-nav vertical class="navbar navbar-nav collapse navbar-collapse">
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Active</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Link</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Another</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Disabled</b-nav-item>
          </b-nav>
          <b-sidebar id="sidebar-variant"  bg-variant="dark" right shadow>
            <div>
              <a class="nav-link" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link">Disabled</a>
              <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Active</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Link</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Another</b-nav-item>
            <b-nav-item class="col-12 btn btn-primary px-5 mb-3">Disabled</b-nav-item>
            </div>
          </b-sidebar>
        </div>
      </nav>
    </div>
  </div> -->
  <!-- <div class="row">
    <div class="col-md-2" height="80vh">
      <b-navbar class="col-12" toggleable="lg" type="dark" variant="dark" height="80vh">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-nav vertical tabs justified>
            <b-navbar-brand href="#">
              NavBar
            </b-navbar-brand>
            <hr>
            <b-nav-item active>
              Workouts
            </b-nav-item>
            <b-nav-item>Workouts Schedule</b-nav-item>
            <b-nav-item v-b-toggle.accordion-1>
              Workout Template
              <b-collapse id="accordion-1" visible>
                <b-nav-item>Your Template</b-nav-item>
                <b-nav-item>Public Template</b-nav-item>
              </b-collapse>
            </b-nav-item>
          </b-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div> -->
  <ul id="accordionSidebar" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink" />
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Interface
    </div>

    <!--  -->
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-fw fa-tachometer-alt" />Workouts
      </NuxtLink>
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-clipboard-list" />Workouts Schedules
      </NuxtLink>
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-calendar-alt" />Calender
      </NuxtLink>
    </li>

    <hr class="sidebar-divider">
    <!-- Heading -->
    <div class="sidebar-heading">
      Workouts Templates
    </div>

    <!--  -->
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="far fa-clipboard" />Your Templates
      </NuxtLink>
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-clipboard" />Public Templates
      </NuxtLink>
    </li>

    <hr class="sidebar-divider">
    <!-- Heading -->
    <div class="sidebar-heading">
      Exercises
    </div>

    <!--  -->
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-filter" />by Category
      </NuxtLink>
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-running" />by Muscle
      </NuxtLink>
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-dumbbell" />by equipment
      </NuxtLink>
    </li>

    <hr class="sidebar-divider">
    <!--  -->
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/user/workout">
        <i class="fas fa-folder-plus" />Add New exercise
      </NuxtLink>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button id="sidebarToggle" class="rounded-circle border-0" />
    </div>
  </ul>
</template>
