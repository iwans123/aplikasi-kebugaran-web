<template>
  <div>
    <b-modal
      id="modal-exercise"
      ref="modal"
      title="Add Exercises"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- Exercise -->
        <div>
          {{ workoutName }}
          <b-form-group
            label="Exercise Name"
          />
          <b-form-input
            v-model.trim="exname"
            list="my-list-id"
            @keyup="getExercise"
          />

          <datalist id="my-list-id">
            <option disabled />
            <option v-for="(exercise, index) in exercises" :key="index">
              {{ exercise.name }}
            </option>
          </datalist>
        </div>
        <hr>
        <!-- Categories -->
        <hr>
        <div>
          <b-form-group
            label="Sets"
          />
          <b-form-input v-model="exsets" />
        </div>
        <!-- Description -->
        <div>
          <b-form-group
            label="Comment"
          />
          <b-form-input v-model="comment" />
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    workoutName: {
      type: String,
      default: ''
    },
    workoutId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      exerciseDescription: '--',
      selectExercise: 'choose',
      selectCategories: 'choose',
      categories: [],
      exname: null,
      wrId: this.workoutId,
      exercisesInfo: [],
      exercises: [],
      shortExercise: []
    }
  },
  async fetch () {
    this.categories = await fetch(
      'https://wger.de/api/v2/exercisecategory/?format=json'
    ).then(res => res.json())
    this.exercisesInfo = await fetch(
      'https://wger.de/api/v2/exerciseinfo/?format=json'
    )
  },
  methods: {
    getExercise () {
      fetch('https://wger.de/api/v2/exercise/?format=json')
        .then(response => response.json())
        .then((res) => {
          if (this.searchExercise) {
            this.exercises = res.results.filter(ex => ex.name.toLowerCase().includes(this.exname.toLowerCase()))
          } else {
            this.exercises = res.results
          }
        })
    },
    selectedCategories (input) {
      this.selectCategories = input
    },
    selectedExercise (name, description) {
      this.selectExercise = name
      this.exerciseDescription = description
    },
    exerciseShorting (input) {
      this.shortExercise = this.exercises.filter(function (el) {
        return el.category === input
      })
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit () {
      try {
        await this.$axios.put(`/api/workout-data/update/${this.wrId}`, {
          exname: this.exname,
          exsets: this.exsets,
          comment: this.comment
        })
        this.$nextTick(() => {
          this.$bvModal.hide('modal-exercise')
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
