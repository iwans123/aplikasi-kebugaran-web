<template>
  <div class="container mb-5">
    <div>
      <h2>Category</h2>
    </div>
    <b-form inline>
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
        :value="null"
      />

      <b-button variant="primary">
        Cari
      </b-button>
    </b-form>
  </div>
</template>
