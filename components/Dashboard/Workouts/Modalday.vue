<template>
  <div>
    <b-modal
      id="modal-day"
      ref="modal"
      title="Add Workout day"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          v-model="name"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            required
          />
          <!-- checkbox -->
          <hr>
          <b-form-checkbox-group
            id="checkbox-group-2"
            stacked
          >
            <b-form-checkbox v-model="days" value="Sunday">
              Sunday
            </b-form-checkbox>
            <b-form-checkbox v-model="days" value="Monday">
              Monday
            </b-form-checkbox>
            <b-form-checkbox v-model="days" value="Tuesday">
              Tuesday
            </b-form-checkbox>
            <b-form-checkbox v-model="days" value="Wednesday">
              Wednesday
            </b-form-checkbox>
            <b-form-checkbox v-model="days" value="Thursday">
              Thursday
            </b-form-checkbox>
            <b-form-checkbox v-model="days" value="Saturday">
              Saturday
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      days: [],
      exercises: [],
      error: null
    }
  },
  methods: {
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit () {
      try {
        await this.$axios.post('/api/workout/add', {
          name: this.name,
          days: this.days,
          exercises: this.exercises
        })
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-day')
        })
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>
