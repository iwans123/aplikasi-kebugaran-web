<template>
  <div>
    <p v-if="$fetchState.pending">
      Loading....
    </p>
    <p v-else-if="$fetchState.error">
      Error while fetching mountains
    </p>
    <div v-else>
      <b-dropdown text="Dropdown Button" class="m-md-2">
        <b-dropdown-item v-for="(mountain, index) in mountains.results" id="dropdown-1" :key="index">
          {{ mountain.name }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mountains: []
    }
  },
  async fetch () {
    this.mountains = await fetch(
      'https://wger.de/api/v2/ingredient/?format=json'
    ).then(res => res.json())
  }
}
</script>
