<template>
  <div>
    <b-button v-b-modal.modal-1 variant="danger" class="end-session-button">End Session</b-button>
    <div class="fullscreen">
      <youtube
        height="100%"
        :player-vars="playerVars"
        width="100%"
        ref="youtube"
        :video-id="videoId"
      ></youtube>
    </div>
    <b-modal id="modal-1" title="End Session" class="text-center" hide-footer hide-header centered>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <p class="my-4">Are you sure you want to end the session?</p>
        <div class="d-flex justify-content-center w-100">
          <b-button class="w-25 cancel-button mr-3" @click="$bvModal.hide('modal-1')">Cancel</b-button>
          <b-button variant="danger" class="w-25" @click="endSession">End</b-button> 
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'videoPlayer',
  props: ['togglePlayer'],
  data() {
    return {
      firstTimePlayed: true,
      videoId: 'ZLX3YoFYg1k',
      videos: ['https://www.youtube.com/watch?v=ZLX3YoFYg1k'],
      playerVars: {
        modestbranding: 1,
        showinfo: 0,
        autoplay: 0,
        rel: 0,
        constrols: 0,
        disablekb: 1,
        muted: true
      },
    };
  },
  watch: {
    togglePlayer: function(newVal) { // watch it
      if (newVal) {
        this.playVideo();
      } else {
        this.stopVideo();
      }
    }
  },
  methods: {
    playVideo() {
      if (this.firstTimePlayed) {
        this.player.mute();
        // this.$refs.youtube.player.loadPlaylist(this.videos);
        // this.$refs.youtube.player.setLoop(true);
        this.$refs.youtube.player.playVideo();

        this.firstTimePlayed = false;
      } else {
        this.$refs.youtube.player.playVideo();
      }
    },
    stopVideo() {
      this.player.pauseVideo();
    },
    initialize() {
      this.firstTimePlayed = true;
    },
    getId(url) {
      return this.$youtube.getIdFromUrl(url);
    },
    endSession() {
      console.log('test');
      this.$router.push({name: 'procedureInfo'});
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100vw;
}
.fullscreen {
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  pointer-events: none;
}

.end-session-button {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 2%;
  margin-top: 2%;
}

.cancel-button {
  background: gray !important;
}
</style>