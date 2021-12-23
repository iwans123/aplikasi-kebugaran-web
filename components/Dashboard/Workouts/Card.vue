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
        <div class="card border-primary">
          <div class="card-header d-flex justify-content-between">
            <b-button v-b-modal.modal-day variant="success">
              Add training day
            </b-button>
          </div>
          <div class="card-body">
            <div
              v-for="workout in workouts"
              :key="workout._id"
              class="card-text"
            >
              <app-table
                :workout-id="workout._id"
                :workout-name="workout.name"
                :workout-day="workout.days"
                :workout-ex="workout.exercises"
              />
              <app-modalexercises :workout-name="workout.name" :workout-id="workout._id" />
            </div>
            <hr color="white">
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
  },
  props: {
    workouts: {
      type: [Object, Array],
      default: () => {}
    }
  },
  data () {
    return {
      workoutData: this.workouts
    }
  }
}
</script>
