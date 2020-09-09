<template>
  <form @submit.prevent="onSubmit" class="procedure-info">
    <h4>Procedure Type:</h4>
    <b-form-select v-model="procedureSelect" :options="procedureTypes" class="w-50 mt-1"></b-form-select>

    <hr>

    <h4 class="mt-2">Procedure Number:</h4>
    <div class="d-flex justify-content-center align-items-center align-content-center text-center">
      <b-form-input
        type="number"
        required
        placeholder="Proc. #"
        class="w-25"
        v-model="procedureNum"
        min="0"
      ></b-form-input>
      <p class="mx-3 pt-3">out of</p>
      <b-form-input
        type="number"
        required
        placeholder="Total Proc."
        class="w-25 text-center"
        v-model="totalProcedures"
        min="0"
      ></b-form-input>
    </div>

    <hr>

    <h4>Select Playlist:</h4>
    <b-form-select v-model="playlistSelect" :options="playlistList" class="w-50 mt-1 mb-5"></b-form-select>
    <div class="controls">
      <div class="control-buttons"></div>
      <div class="control-buttons center-control"><b-button type="submit" class="start-session"><b-icon-tv></b-icon-tv> Start Session</b-button></div>
      <div class="control-buttons"></div>
    </div>
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
        { value: 'bone cancer', text: 'Bone Cancer' },
        { value: 'reducing tumor', text: 'Reducing Tumor' },
        { value: 'brain caner', text: 'Brain Cancer' },
        { value: 'lung cancer', text: 'Lung Cancer' },
      ],
      playlistSelect: null,
      playlistList: [
        { value: null, text: 'Please select a playlist' },
        { value: 'superhero', text: 'Superhero' },
        { value: 'princess', text: 'Princess' },
        { value: 'twitch', text: 'Twitch' },
        { value: 'peppa the pig', text: 'Peppe the Pig' },
        { value: 'live news', text: 'Live News' }
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
    background: #F7FBFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .start-session {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn-secondary {
    background: none !important;
  }

  .controls {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    background: #3AB5F1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control-buttons {
    width: 33.33vw;
    text-align: center;
    color: white;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-control {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
</style>