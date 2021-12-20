<template>
  <div>
    <b-button v-b-modal.modal-day variant="success">
      Add training day
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
      id="modal-day"
      ref="modal"
      title="Add Workout day"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Description"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          />
          <!-- checkbox -->
          <hr>
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="flavour-2"
            stacked
          >
            <b-form-checkbox value="Sunday">
              Sunday
            </b-form-checkbox>
            <b-form-checkbox value="Monday">
              Monday
            </b-form-checkbox>
            <b-form-checkbox value="Tuesday">
              Tuesday
            </b-form-checkbox>
            <b-form-checkbox value="Wednesday">
              Wednesday
            </b-form-checkbox>
            <b-form-checkbox value="Thursday">
              Thursday
            </b-form-checkbox>
            <b-form-checkbox value="Saturday">
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
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal () {
      this.name = ''
      this.nameState = null
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
        this.$bvModal.hide('modal-day')
      })
    }
  }
}
</script>
