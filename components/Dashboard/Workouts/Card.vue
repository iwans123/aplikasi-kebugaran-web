<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Workouts</h2>
      </div>
      <div class="col-12">
        <app-modalday />
      </div>
      <div class="col mt-3">
        <!-- <b-card header="Primary" bg-variant="secondary">
          <b-card-text>
            <app-table />
            <hr color="white">
            <app-modalexercises />
          </b-card-text>
        </b-card> -->
        <div class="card border-primary">
          <div class="card-header d-flex justify-content-between">
            Featured
            <a href="" class="btn btn-danger">Delete</a>
          </div>
          <div class="card-body">
            <div class="card-text">
              <app-table />
            </div>
            <hr color="white">
            <app-modalexercises />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modalday from '@/components/Dashboard/Workouts/Modalday.vue'
import Table from '@/components/Dashboard/Workouts/Table.vue'
import Modalexercises from '@/components/Dashboard/Workouts/Modalexecises.vue'

export default {
  components: {
    'app-modalday': Modalday,
    'app-table': Table,
    'app-modalexercises': Modalexercises
  }
}
</script>
