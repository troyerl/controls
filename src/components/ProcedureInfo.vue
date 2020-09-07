<template>
  <form @submit.prevent="onSubmit" class="procedure-info">
    <h4 class="text-white">Procedure Type:</h4>
    <b-form-select v-model="procedureSelect" :options="procedureTypes" class="w-50 mt-1"></b-form-select>

    <hr>

    <h4 class="mt-2 text-white">Procedure Number:</h4>
    <div class="d-flex justify-content-center align-items-center align-content-center text-center">
      <b-form-input
        type="number"
        required
        placeholder="Proc. #"
        class="w-25 text-center"
        v-model="procedureNum"
      ></b-form-input>
      <p class="mx-3 pt-3 text-white">out of</p>
      <b-form-input
        type="number"
        required
        placeholder="Total Proc."
        class="w-25 text-center"
        v-model="totalProcedures"
      ></b-form-input>
    </div>

    <hr>

    <h4 class="text-white">Select Playlist:</h4>
    <b-form-select v-model="playlistSelect" :options="playlistList" class="w-50 mt-1"></b-form-select>
    <b-button type="submit" class="mt-4">Continue</b-button>
  </form>
</template>

<script>
export default {
  name: 'ProcedureInfo',
  data() {
    return {
      procedureSelect: null,
      procedureTypes: [
        { value: null, text: 'Please select a procedure type' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled' }
      ],
      playlistSelect: null,
      playlistList: [
        { value: null, text: 'Please select a procedure type' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled' }
      ],
      procedureNum: null,
      totalProcedures: null
    }
  },
  methods: {
    onSubmit() {
      if (this.procedureSelect && this.procedureTypes) {
        this.$router.push({name: 'missionControls'});
      }
    }
  }
}
</script>

<style>
  .procedure-info {
    min-height: 100vh;
    width: 100vw;
    background: #3AB5F1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>