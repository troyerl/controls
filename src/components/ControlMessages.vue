<template>
  <div class="control-messages">
    <div :key="message" class="message-container" v-for="message in defaultMessages">
      <button class="button" @click="setMessage">{{message}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlMessages',
  props: ['setMessage'],
  data() {
    return {
      defaultMessages: [
        'You are half-way done', 
        'Ten minutes remaining',
        'Five minutes remaining',
        'Hold your breath',
        'You are doing great!',
        'About 2 minutes remaining',
        'You may breathe normally now',
        'Your parents are proud of you!',
        'Please do not move while we come into the room',
        'Test'
      ]
    }
  }
}
</script>

<style>
.control-messages {
  width: 100vw;
  height: 90vw;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12vh;
}
.message-container {
  width: 33.33vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #538fbe;
  height: 90%;
  width: 90%;
  font-size: 1.15rem;
  border: 1px solid #2d6898;
  background-image: linear-gradient(to bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -o-linear-gradient(to bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -moz-linear-gradient(to bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -webkit-linear-gradient(to bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -ms-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);

  background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(73,132,180)),
      color-stop(1, rgb(97,155,203))
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-shadow: 0px -1px 0px rgba(0,0,0,.5);
  -webkit-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  -moz-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
}

.button:active {
  background-image: linear-gradient(to bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -o-linear-gradient(to bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -moz-linear-gradient(to bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -webkit-linear-gradient(to bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -ms-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(88,154,204)),
      color-stop(1, rgb(90,150,199))
  );
  -webkit-box-shadow: 0px 2px 0px #2b638f, 0px 1px 6px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  -moz-box-shadow: 0px 2px 0px #2b638f, 0px 1px 6px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  box-shadow: 0px 2px 0px #2b638f, 0px 1px 6px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  -webkit-transform: translate(0, 4px);
  -moz-transform: translate(0, 4px);
  transform: translate(0, 4px);
  -webkit-transition: all .1s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.button:focus {
  outline: none;
}
</style>