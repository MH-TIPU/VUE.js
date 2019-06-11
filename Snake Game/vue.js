Vue.component('snake-game',{
	'template' : `
		<div>
			<div v-if="game_on" class="game">
				<span v-for="x in list" :data-id="x" class="px">
					<span v-for="y in list" :data-id="y" class="px col" :class="{snake: isSnake(x,y), food: isFood(x,y)}"></span>
				</span>
			</div>
			<br><br>
			<span><p class = "score">Score: <b>{{ score }}</b></p></span>
			<span><p class = "scorer" v-show="temp">Best Scorer: {{ Scorer }} - {{ hi_score }}</p></span>
		</div>

	`,

	data: function(){

		return {
			'total' : 25,
			'snake': [],
			'snakeLenth': 3,
			'snakeDirection': 'right',
			'food': {},
			'game_on': true,
			'hi_score': 0,
			'Scorer': '',
			'temp': false
		}
	},

	created: function(){
		this.init();

	},
	destroyed: function(){
		window.removeEventListener('keyup', this.changeDirection);
	},
	computed: {
		list: function(){
			var x = [];

			for (var i = 0 ; i <= this.total ; i++) {
				x.push(i);
			}

			return x;
		},
		score: function(){
			return this.snakeLenth-3;
		},
	},

	methods: {
		init(){
			this.newGame();

			window.addEventListener('keyup', this.changeDirection);

			setInterval(this.move,250);			
			
		},
		newGame(){
			var self = this;

			this.snakeLenth = 3;
			self.snake = [];

			self.snake.push(self.getRand());
			self.food = self.getRand();
		},

		gameResult(){

			if (this.score>this.hi_score) {
						
  				var person = prompt("Please enter your name:");
				if (person == null || person == "") {
					var person = prompt("Please enter your name:");
   			    } else {
				    this.Scorer = person;
				}
				alert('Game over. Congratulation ' + person + ' Your score: ' + this.score + ' is Best Score.');
				this.hi_score=this.score;
				this.temp = true;
				
			}
			else{
				alert('Game over. Your score: ' + this.score );
			}
			
			this.newGame();

		},

		move(){

			var self = this;

			var last = self.snake[self.snake.length-1];

			var x = last.x;
			var y = last.y;

			
			if(x == this.food.x && y == this.food.y){
				this.eat();
			}

			switch( self.snakeDirection ){
				case 'up':
					y -= 1;
				break;

				case 'right':
					x += 1;

				break;

				case 'down':
					y += 1;

				break;

				case 'left':
					x -= 1;
				break;
			}


			if(y > self.total){
				y = 0;
				this.gameResult();
			}

			if(x > self.total){
				x = 0;			
				this.gameResult();
			}

			if(y < 0){
				y = self.total;	
				this.gameResult();			
			}

			if(x < 0){
				x = self.total;
				this.gameResult();			
			}

			// self bite
			for(i in this.snake){
				if(this.snake[i] != undefined && this.snake[i].x == x && this.snake[i].y == y){
					this.gameResult();			
				}
			}

			self.snake.push({x: x, y: y})

			if(self.snake.length > self.snakeLenth){
				self.snake.shift();
			}
		},
		isSnake(x,y){
			for(i in this.snake){
				if(this.snake[i].x == x && this.snake[i].y == y){
					return true;
				}
			}
		},
		isFood(x,y){

			if(this.food.x == x && this.food.y == y){
				return true;
			}
		},
		eat(){
			this.snakeLenth += 1;
			this.food = this.getRand();
		},
		changeDirection(e){

			e.preventDefault();
			e.stopPropagation();

			var directions = {
				37 : 'left',
				38 : 'up',
				39 : 'right',
				40 : 'down',
			}

			if(directions[e.keyCode] !== undefined){

				if( (this.snakeDirection == 'right' && directions[e.keyCode] == 'left') ||
					(this.snakeDirection == 'left' && directions[e.keyCode] == 'right') ||
					(this.snakeDirection == 'down' && directions[e.keyCode] == 'up') ||
					(this.snakeDirection == 'up' && directions[e.keyCode] == 'down') ) {

					return false;
				}

				this.snakeDirection = directions[e.keyCode];
			}

			return false;
		},

		getRand(){
			return {x: Math.floor(Math.random()*this.total), y: Math.floor(Math.random()*this.total)}
		},
	},
})

var vm = new Vue({
	'el' : '#app',
})