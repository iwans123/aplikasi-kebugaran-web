<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex justify-content-between">
      <h6 class="m-0 font-weight-bold text-primary ">
        {{ workoutName }}
        <p class="m-0 font-weight-light">
          {{ workoutDay }}
        </p>
      </h6>
      <button class="btn btn-sm btn-outline-danger">
        Remove Workout
      </button>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="ex.length">
            <tr v-for="(exercise, index) in ex" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ exercise.exname }}</td>
              <td>{{ exercise.exsets }}</td>
              <td>{{ exercise.comment }}</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  Remove Exercise
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <b-button v-b-modal.modal-exercise block variant="primary">
        Add exercises
      </b-button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    workoutName: {
      type: String,
      default: 'Exercise Name'
    },
    workoutDay: {
      type: String,
      default: 'Workout Day'
    },
    workoutEx: {
      type: [Array, Object],
      default: () => {}
    }
  },

  data () {
    return {
      ex: this.workoutEx
    }
  }
}
</script>
