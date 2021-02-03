<template>
  <div class="bodySimon">
   	<div id="app">
    	<div class="col-md-6 col-md-offset-3">
				<div class="text-center well game">
					<div>
						<button id="red" type="button" :disabled="canPress === false" @click="addInput(1)"></button>
						<button id="blue" type="button" :disabled="canPress === false" @click="addInput(2)"></button>
					</div>
					<div>
						<button id="green" type="button" :disabled="canPress === false" @click="addInput(3)"></button>
						<button id="yellow" type="button" :disabled="canPress === false" @click="addInput(4)"></button>
					</div>
					<div class="text-center">
						<p class="author"><br>by <a href="http://robertsonlima.com">All Rights to Robertson Lima</a></p>
					</div>
				</div>
   		</div>
   	</div>
	</div>
</template>
 
<script>
const SEQUENCE = {
	1: "red",
	2: "blue",
	3: "green",
	4: "yellow"
};

const SONG = {
	1: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
	2: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
	3: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
	4: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
};

export default {
  name: 'Simon',    
  data() {
    return {
      started: false,
      canPress: false,
      sequence: "",
      input: "",
      inputTurn: 0,
      turn: 0,
      maxTurn: 20
    }
	},

	mounted() {
		this.$root.$once('Simon', () => {
			this.start();
		});
	},

	methods: {
		start() {
			this.reset();
			this.started = true;
			this.$store.dispatch('setTimerAction', this.started);
			this._turn();
		},

		reset() {
			this.started = false;
			this.canPress = false;
			this.sequence = "";
			this.input = "";
			this.inputTurn = 0;
			this.turn = 0;
		},

		_turn() {
			if (this.turn == this.maxTurn) {
				this.started = false;
				this.$store.dispatch('setTimerAction', this.started);
				this.$store.dispatch('setGameStatusAction', {
					msg: true,
					msgText: "¡Ganaste!"
				});
				this.canPress = false;
				this.sendResults();
				setInterval(this.start(), 5000);
			} 
			else {
				this.canPress = false;
				this.$store.dispatch('setGameStatusAction', {
					msg: true,
					msgText: "Turn: " + this.turn ++
				});
				this.sequence += Math.floor(Math.random() * 4 + 1);
				this.play();
			}
		},

		play() {
			var delayBase = 250;
			var baseDuration = 250;
			for (var i = 0; i < this.sequence.length; i ++) {
				var bt = document.getElementById(SEQUENCE[this.sequence.charAt(i)]);
				var audio = new Audio(SONG[this.sequence.charAt(i)]);
				this.flash(bt, audio, delayBase, baseDuration);
				delayBase += baseDuration;
			}
			setInterval(this.getInput, delayBase);
		},

		flash(element, audio, delay, flashDuration) {
			setTimeout(function() {
				element.classList.add("btActive");
				audio.play();
			}, delay);
			setTimeout(function() {
				element.classList.remove("btActive");
			}, delay + flashDuration - 100);
		},

		getInput() {
			this.canPress = true;
		},
		
		addInput(bt) {
			if (this.canPress === true) {
				this.input = this.input + bt;
				var beep = new Audio(SONG[bt]);
				beep.play();
				this.check();
			}
		},

		check() {
			this.canPress = false;
			var turn = this.inputTurn;
			if (this.input.charAt(turn) == this.sequence.charAt(turn)) {
				this.inputTurn ++;
				if (this.inputTurn == this.sequence.length) {
					this.input = "";
					this.inputTurn = 0;
					setTimeout(this._turn, 500);
				}
			} 
			else {
				this.$store.dispatch('setGameStatusAction', {
					msg: true,
					msgText: "¡Perdiste!"
				});
				this.$store.dispatch('setTimerAction', false);
				this.sendResults();
			}
		},

		sendResults() {
      fetch("/rankings", {
        method: "POST",
        body: JSON.stringify({
          nickname: this.$store.getters.user != null ? this.$store.getters.user.nickname : "Anónimo",
          game: this.$options.name,
          score: this.turn,
          time: this.$store.getters.valueTimer 
        }),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
      .then(res => {
        return res.json()
      })
      .catch(err => console.log(err));
    }
	}
};
</script>

<style scoped>
button {
	height: 120px;
	width: 120px;
	margin: 3px;
}

button:active {
	border: 10px;
	transform: translateY(-4px);
	box-shadow: 0 0 50px #4594FB;
}

button:disabled {
	opacity: 1;
}

.btActive {
	border: 10px;
	transform: translateY(-4px);
	box-shadow: 0 0 50px #4594FB;
}

#red {
	background-color: #C9302C;
}

#blue {
	background-color: #286090;
}

#green {
	background-color: #449D44;
}

#yellow {
	background-color: #EC971F;
}
</style>