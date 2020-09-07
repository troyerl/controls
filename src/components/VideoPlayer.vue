<template>
  <div class="fullscreen">
    <youtube
      height="100%"
      :player-vars="playerVars"
      width="100%"
      ref="youtube"
    ></youtube>
  </div>
</template>

<script>
export default {
  name: 'videoPlayer',
  data() {
    return {
      firstTimePlayed: true,
      videos: [],
      playerVars: {
        modestbranding: 1,
        showinfo: 0,
        autoplay: 0,
        rel: 0,
        constrols: 0,
        disablekb: 1,
      },
    };
  },
  methods: {
    playVideo() {
      if (this.firstTimePlayed) {
        this.$refs.youtube.player.loadPlaylist(this.videos);
        this.$refs.youtube.player.setLoop(true);
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
}
div {
  pointer-events: none;
}
</style>