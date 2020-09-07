<template>
  <div>
    <VideoPlayer v-show="showVideoPlayer"/>
    <ControlMessages v-if="!showVideoPlayer"/>
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
      playing: false
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
</style>