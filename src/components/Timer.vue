<template>
  <div id="clock">
    <span class="time">{{ time }}</span>
    <template v-if="$store.getters.timer === true"> {{ start() }} </template>
    <template v-else> {{ stop() }} </template>
  </div>
</template>

<script>

export default {
  name: "Timer",
  data() {
    return {
      time: '00:00:00.000',
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false
    }
  },

  mounted() {
		this.$root.$on('Timer', () => {
      this.reset();
		})
	},

  methods: {
    start() {
      if(this.running) return;
      
      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
      }

      if (this.timeStopped !== null)
        this.stoppedDuration += (new Date() - this.timeStopped);

      this.started = setInterval(this.clockRunning, 10);	
      this.running = true;
    },

    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
    },

    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
    },

    clockRunning() {
      var currentTime = new Date(),
          timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration),    
          hour = timeElapsed.getUTCHours(),
          min = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();

      this.time = 
        this.zeroPrefix(hour, 2) + ":" + 
        this.zeroPrefix(min, 2) + ":" + 
        this.zeroPrefix(sec, 2) + "." + 
        this.zeroPrefix(ms, 3);

        this.$store.dispatch('setValueTimerAction', timeElapsed);
    },

    zeroPrefix(num, digit) {
      var zero = '';
      for(var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style scoped>
#clock {
  width: auto;
  height: auto;
  padding: 10%;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
  background-size: 100%;
  font-family: 'Bungee Inline', cursive;
  border-style: outset;
  border-color:  #064759;
}

.time {
  font-size: 25px;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}

@media screen and (min-width: 1400px) {
.time {
  font-size: 35px;
  }
}
</style>