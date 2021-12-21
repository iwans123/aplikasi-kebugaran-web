<template>
  <div>
    <b-button v-b-modal.modal-edit variant="info">
      Edit
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
      id="modal-edit"
      ref="modal"
      title="Edit Exercises"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Exercises"
          label-for="exercises-input"
          invalid-feedback="Exercises is required"
          :state="exerciseState"
        >
          <b-form-input
            id="exercises-input"
            v-model="name"
            :state="exerciseState"
            required
          />
        </b-form-group>
        <b-form-group
          label="Comment"
          label-for="comment-input"
          invalid-feedback="Name is required"
          :state="commentState"
        >
          <b-form-input
            id="comment-input"
            v-model="name"
            :state="commentState"
          />
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
        this.$bvModal.hide('modal-edit')
      })
    }
  }
}
</script>
