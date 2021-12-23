<template>
  <div class="container mb-5">
    <div>
      <h2>Category</h2>
    </div>
    <b-form inline>
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="[{ text: 'Choose...', value: null }]"
        :value="null"
      >
        <option v-for="(category, index) in categories.results" :key="index">
          {{ category.id }}
        </option>
      </b-form-select>

      <b-button variant="primary">
        Cari
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categories: []
    }
  },
  async fetch () {
    this.categories = await fetch(
      'https://wger.de/api/v2/exercisecategory/?format=json'
    ).then(res => res.json())
  }
}
</script>
