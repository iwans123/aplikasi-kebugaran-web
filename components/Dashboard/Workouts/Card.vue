<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>List of Community</h2>
      </div>
      <div class="col-12">
        <app-modalday />
      </div>
      <div class="col mt-3">
        <b-card header="Primary" style="background-color: #181D31;">
          <b-card-text>
            <app-table />
            <hr color="white">
            <app-modalexercises />
          </b-card-text>
        </b-card>
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
