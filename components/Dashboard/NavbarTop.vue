<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <!-- <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars" />
    </button> -->

    <!-- Topbar Search -->
    <!-- <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        >
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form> -->

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <!-- <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          id="searchDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-search fa-fw" />
        </a>
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              >
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li> -->

      <div class="topbar-divider d-none d-sm-block" />

      <!-- Nav Item - User Information -->
      <!-- <li class="nav-item dropdown no-arrow border">
        <a
          id="userDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span v-if="isAuthenticated" class="mr-2 d-none d-lg-inline text-gray-600 small">Hello, {{ loggedInUser.name }}!</span>
          <i class="fas fa-user-circle" />
        </a> -->
      <!-- Dropdown - User Information -->
      <!-- <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" @click="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </a>
        </div>
      </li> -->
      <!-- <div v-if="isAuthenticated">
        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <span>Hello, {{ loggedInUser.name }}!</span>
          </template>
          <b-dropdown-item @click="logout">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </b-dropdown-item>
        </b-dropdown> -->
      <div v-if="isAuthenticated">
        <div>
          <span>Hello, {{ loggedInUser.name }}!</span>
        </div>
      </div>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
