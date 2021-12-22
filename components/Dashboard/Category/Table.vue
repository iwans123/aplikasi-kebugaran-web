<template>
  <div class="container">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Equipment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(mountain, index) in mountains.results" :key="index">
                <td>{{ mountain.name }}</td>
                <td>{{ mountain.category.id }}</td>
                <td>#</td>
                <td><app-detail /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modaldetail from '@/components/Dashboard/Category/Modaldetail.vue'

export default {
  components: {
    'app-detail': Modaldetail
  },
  data () {
    return {
      mountains: []
    }
  },
  async fetch () {
    this.mountains = await fetch(
      'https://wger.de/api/v2/exerciseinfo/?format=json'
    ).then(res => res.json())
  }
}
</script>
