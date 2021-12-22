<template>
  <div>
    <b-button v-b-modal.modal-exercise variant="success">
      Add exercises
    </b-button>

    <!-- <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">
        --
      </div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" :key="name">
          {{ name }}
        </li>
      </ul>
    </div> -->

    <b-modal
      id="modal-exercise"
      ref="modal"
      title="Add Exercises"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- <b-form-group
          label="Category"
          label-for="exercises-input"
          invalid-feedback="Exercises is required"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            v-model="selectedProject"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }]"
            @change="exerciseShorting"
          >
            <option v-for="(category) in categories.results" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </b-form-select>
        </b-form-group> -->
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
        <!-- <b-form-group
          label="Exercises"
          label-for="comment-input"
          invalid-feedback="Name is required"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }]"
            :value="null"
          >
            <option v-for="(exercise, index) in shortExercise" :key="index">
              {{ exercise.name }}
            </option>
          </b-form-select>
        </b-form-group> -->
        <!-- Exercise -->
        <b-form-group
          label="Exercises"
        >
          <b-dropdown
            :text="selectExercise"
            block
            variant="outline-primary"
            class="m-2"
            menu-class="w-100"
          >
            <b-dropdown-item v-for="(exercise, index) in shortExercise" :key="index" @click="selectedExercise(exercise.name, exercise.description)">
              {{ exercise.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-form-group>
        <!-- Description -->
        <hr>
        <div>
          <h2>
            Description :
          </h2>
          {{ exerciseDescription }}
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
      exercises: [],
      shortExercise: []
    }
  },
  async fetch () {
    this.categories = await fetch(
      'https://wger.de/api/v2/exercisecategory/?format=json'
    ).then(res => res.json())
    this.exercises = await fetch(
      'https://wger.de/api/v2/exerciseinfo/?format=json'
    ).then(res => res.json())
    // this.shortExercise = await fetch(
    //   'https://wger.de/api/v2/exerciseinfo/?format=json'
    // ).then(res => res.json())
  },
  methods: {
    selectedCategories (input) {
      this.selectCategories = input
    },
    selectedExercise (name, description) {
      this.selectExercise = name
      this.exerciseDescription = description
    },
    exerciseShorting (input) {
      this.shortExercise = this.exercises.results.filter(function (el) {
        return el.category.id === input
      })
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-exercise')
      })
    }
  }
}
</script>
