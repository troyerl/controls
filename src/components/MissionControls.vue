<template>
  <div>
    <VideoPlayer v-show="showVideoPlayer" :togglePlayer="playing"/>
    <ControlMessages v-if="!showVideoPlayer" :setMessage="setMessage"/>
    <div
      v-if="message"
      class="d-flex w-100 align-items-center justify-content-center"
      style="position: fixed; bottom: 5rem;"
    >
      <div class="message d-flex align-content-center justify-content-center">
        <p class="text-center">{{ message }}</p>
      </div>
    </div>
    <div class="controls">
      <div class="control-buttons" @click="toggleShowPlayer"><b-icon-arrow-left class="mr-2" v-if="!showVideoPlayer"></b-icon-arrow-left>{{showVideoPlayer ? '' : 'Controls'}}</div>
      <div class="control-buttons center-control" @click="centerControl">{{showVideoPlayer ? playPauseText : 'Custom Message'}}</div>
      <div class="control-buttons" @click="toggleShowPlayer">{{showVideoPlayer ? 'Messages' : ''}} <b-icon-arrow-right class="ml-2" v-if="showVideoPlayer"></b-icon-arrow-right></div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer';
import ControlMessages from './ControlMessages';

export default {
  name: 'MissionControls',
  components: {
    VideoPlayer,
    ControlMessages
  },
  data() {
    return {
      showVideoPlayer: true,
      playing: false,
      message: ''
    }
  },
  computed: {
    playPauseText() {
      return this.playing ? 'Pause' : 'Play'
    },
  },
  methods: {
    toggleShowPlayer() {
      this.showVideoPlayer = !this.showVideoPlayer;
    },
    setMessage(e) {
      this.toggleShowPlayer();
      this.message = e.target.innerText;
      setTimeout(() => {
          this.message = '';
        }, 15 * 1000);
    },
    centerControl() {
      if (this.showVideoPlayer) {
        this.playing = !this.playing;
      } else {
        console.log('controls');
      }
    },
  }
}
</script>

<style>
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

.message {
  width: 50vw;
  height: auto;
  background-color: black;
  overflow-wrap: break-word;
  opacity: 0.85;
  filter: alpha(opacity=85);
  color: white;
  bottom: 50rem;
  z-index: 2;
}
.message p {
  font-size: 1.5rem;
}
</style>