<template>
  <div class="container">
  	<div class="header text-center"> <h1>SIMON GAME</h1> </div>
   	<div id="app">
    	<div class="col-md-6 col-md-offset-3">
				<div class="text-center well game">
					<div>
						<button id="red" type="button" class="btn btn-danger mybutton" :disabled="canPress===false" @click="addInput(1)"></button>
						<button id="blue" type="button" class="btn btn-primary mybutton" :disabled="canPress===false" @click="addInput(2)"></button>
					</div>
					<div>
						<button id="green" type="button" class="btn btn-success mybutton" :disabled="canPress===false" @click="addInput(3)"></button>
						<button id="yellow" type="button" class="btn btn-warning mybutton" :disabled="canPress===false" @click="addInput(4)"></button>
					</div>
					<div class="well">
						<div class = "output"> <h3>{{ output }}</h3></div>
					</div>
					<div class="text-center">
						<div class="btn-group">
								<button @click="start" :disabled="started==true" class="btn">Start</button>
								<button id="strictbt" @click="turnStrict" class="btn btn-danger">Strict</button>
								<button :disabled="canPress ===false" @click="reset" class="btn">Reset</button>
						</div>
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
			path: '/simon',
			strict: false,
      started: false,
      canPress: false,
      sequence: "",
      input: "",
      inputTurn: 0,
      turn: 0,
      output: "--", 
      maxTurn: 20
    }
	},
	methods: {
		start: function() {
				this.reset();
				this.started = true;
				this._turn();
		},
		_turn: function() {
				if (this.turn == this.maxTurn) {
					this.output = "You won!";
					this.started = false;
					this.canPress = false;
					setTimeout(this.reset, 5000);
					
				} else {
					this.canPress = false;
					this.output = "Turn: " + ++this.turn;
					this.sequence += Math.floor(Math.random() * 4 + 1);
					this.play();
				}
		},
		play: function() {
				var delayBase = 500;
				var baseDuration = 1000;
				for (var i = 0; i < this.sequence.length; i++) {
					var bt = document.getElementById(SEQUENCE[this.sequence.charAt(i)]);
					var audio = new Audio(SONG[this.sequence.charAt(i)]);
					this.flash(bt, audio, delayBase, baseDuration);
					delayBase += baseDuration;
				}
				var self = this;
				setInterval(this.getInput, delayBase);
		},
		flash: function(element, audio, delay, flashDuration) {
				//set press
				setTimeout(function() {
					element.classList.add("btActive");
					audio.play();
				}, delay);
				//set release
				setTimeout(function() {
					element.classList.remove("btActive");
				}, delay + flashDuration - 100);
		},
		getInput: function() {
				this.canPress = true;
		},
		addInput: function(bt) {
				if (this.canPress === true) {
					this.input = this.input + bt;
					var beep = new Audio(SONG[bt]);
					beep.play();
					this.check();
				}
		},
		check: function() {
				this.canPress = false;
				var turn = this.inputTurn;
				if (this.input.charAt(turn) == this.sequence.charAt(turn)) {
					this.inputTurn++;
					if (this.inputTurn == this.sequence.length) {
							this.input = "";
							this.inputTurn = 0;
							setTimeout(this._turn, 2000);
					}
				} else {
					if (this.strict) {
							this.output = "You've lost!";
							setTimeout(this.reset, 5000);
					} else {
							this.input = "";
							this.inputTurn = 0;
							this.output = "You missed. Try again!";
							setTimeout(this.play, 2000);;
					}
				}
		},

		reset: function() {
				this.sequence = "";
				this.input = "";
				this.inputTurn = 0;
				this.turn = 0;
				this.started = false;
				this.output = "--";
				this.canPress = false;
		},
		turnStrict: function() {
				this.strict = !this.strict;
				var bt = document.getElementById("strictbt");
				if (this.strict) {
					bt.classList.remove("btn-danger");
					bt.classList.add("btn-success");
				} else {
					bt.classList.remove("btn-success");
					bt.classList.add("btn-danger");
				}
		}
	}
};
</script>

<style scoped>
body{
   background-color: black;
}
.header h1{
   font-family: "Bungee";
   color: teal;
   font-size: 70px;
}
.output {
   font-family: "Bungee";
}
.mybutton {
   height: 120px;
   width: 120px;
   margin: 3px;
}
.mybutton:active{
   border:10px;
   transform: translateY(-4px);
   box-shadow: 0 5px #999;
}
.mybutton:disabled {
   opacity:1;
}

.btActive {
   border:10px;
   transform: translateY(-4px);
   box-shadow: 0 5px #999;
}
/* Añadido por mii */
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

/* .game {
   background-color: ;
} */
</style>