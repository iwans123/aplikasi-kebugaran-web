<template>
  <div>
    <b-button v-b-modal.modal-exercise variant="success">
      Add exercises
    </b-button>
    <b-modal
      id="modal-exercise"
      ref="modal"
      title="Add Exercises"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- Exercise -->
        <div>
          <b-form-group
            label="Exercise Name"
          />
          <b-form-input
            v-model.trim="search"
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
        <b-form-group
          label="Categories"
        >
          <b-dropdown
            :text="selectCategories"
            block
            variant="outline-primary"
            class="m-2"
            menu-class="w-100"
          >
            <b-dropdown-item v-for="(category) in categories.results" :key="category.id" @click="exerciseShorting(category.id),selectedCategories(category.name)">
              {{ category.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-form-group>
        <hr>
        <!-- Description -->
        <div>
          <b-form-group
            label="Comment"
          />
          <b-form-input />
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      exerciseDescription: '--',
      selectExercise: 'choose',
      selectCategories: 'choose',
      categories: [],
      search: '',
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
            this.exercises = res.results.filter(ex => ex.name.toLowerCase().includes(this.search.toLowerCase()))
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
    handleSubmit () {
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-exercise')
      })
    }
  }
}
</script>
