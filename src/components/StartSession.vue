<template>
  <div class="startSession">
    <b-button class="button-base wide-button main-color ripple mt-3" @click="onStart">Start Session</b-button>
  </div>
</template>

<script>
export default {
  name: 'StartSession',
  methods: {
    onStart() {
      this.$router.push({name: 'procedureInfo'})
    }
  }
}
</script>

<style>
.startSession {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #3AB5F1;
}

.ripple{
  position: relative;
  overflow: hidden; 
}

.ripple:before {
  border-radius: 50%;
  background-color: rgba(255,255,255,0.6);
  content:'';
  position: absolute;
  top: 50%; left: 50%;
  width:0; height:0;
}

.ripple:focus:before {
  transition: all 0.5s ease-out;
  opacity:0;
  width:160px;
  height:160px;
  margin-top:-80px;
  margin-left:-80px;
}

.button-base:hover{
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);  
}

.main-color {
  background: white !important;
}

.wide-button {
  width: 200px !important;
}

.button-base {
  font-family: 'Arimo', sans-serif !important;
  -webkit-appearance: none;
  text-transform: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: black !important;
  vertical-align: middle;
  border-radius: 3px;
  line-height: 36px;
  font-size: 14px !important;
  text-align: center;
  text-decoration:none;
  text-transform: uppercase;
  padding:0 1em;
  margin: 0 0.25em;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  height: 10%;
  border: none !important;
  font-weight: bold !important;
  cursor: pointer;
  background: white !important;
  width: 30% !important;
}

.button-base:focus{
  outline:0;
}


</style>