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
        <b-form-group
          label="Exercises"
          label-for="exercises-input"
          invalid-feedback="Exercises is required"
          :state="exerciseState"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }]"
            :value="null"
          >
            <option v-for="(category) in categories.results" :key="category.id">
              {{ category.name }}
            </option>
          </b-form-select>
        </b-form-group>
        <b-form-group
          label="Comment"
          label-for="comment-input"
          invalid-feedback="Name is required"
          :state="commentState"
        >
          <b-form-select
            id="inline-form-custom-select-pref"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[{ text: 'Choose...', value: null }]"
            :value="null"
          >
            <option v-for="(exercise, index) in exercises.results" :key="index">
              {{ exercise.name }}
            </option>
          </b-form-select>
        </b-form-group>
        <!-- checkbox -->
        <hr>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      nameState: null,
      submittedNames: [],
      categories: [],
      exercises: []
    }
  },
  async fetch () {
    this.categories = await fetch(
      'https://wger.de/api/v2/exercisecategory/?format=json'
    ).then(res => res.json())
    this.exercises = await fetch(
      'https://wger.de/api/v2/exerciseinfo/?format=json'
    ).then(res => res.json())
  },
  methods: {
    exerciseShorting (input) {
      this.exercises = this.categories.filter(function (el) {
        return el.categories.results.id === input
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
