<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>List of Community</h2>
      </div>
      <div class="col-md-6">
        <div class="input-group mb-5">
          <input
            type="text"
            class="form-control border-0 small"
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
      </div>
    </div>
    <div id="community-group" class="row">
      <div class="col">
        <div v-for="community in communities" :key="community._id" class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">
              {{ community.name }}
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ community.city }}
            </h6>
            <p class="card-text"> {{ community.description }} </p>
            <nuxt-link class="card-link" :to="'/community/view/' + community._id">
              View Community
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    communities: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
