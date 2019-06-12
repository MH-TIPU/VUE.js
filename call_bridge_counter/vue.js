var vm = new Vue({
   el: '#paragraph',
   data: {
      names:[],
      points:[],

      newPlayer1: '',
      newPlayer2: '',
      newPlayer3: '',
      newPlayer4: '',

      result1: 0,
      result2: 0,
      result3: 0,
      result4: 0,

      maxResult:0,
      gameEnd: true,

   },

   mounted:function(){
       this.addPlayer(); 
  },

   methods:{
      addPlayer: function(){
        for (var i = 0; i <= 3; i++) {
          var person = prompt("Enter Player " + i );
          this.names.push(person);
        } 
        this.maxResult = Number(prompt('Max Game Result : '));
      },

      addPoint:function(){
        this.points.push({player1:this.newPlayer1, player2:this.newPlayer2, player3:this.newPlayer3, player4:this.newPlayer4});
          this.newPlayer1 ='',
          this.newPlayer2 ='',
          this.newPlayer3 ='',
          this.newPlayer4 ='';

          this.totalresult();
          if (this.gameEnd == false) {
            this.winner();
          }
      },

      totalresult: function () {
            var sum = 0;
            this.points.forEach(e => {
              sum +=Number(e.player1);
            });
          this.result1 = sum;            

            sum = 0;
            this.points.forEach(e => {
              sum +=Number(e.player2);
            });
            this.result2 = sum;

            sum = 0;
            this.points.forEach(e => {
              sum +=Number(e.player3);
            });
            this.result3 = sum;

            sum = 0;
            this.points.forEach(e => {
              sum +=Number(e.player4);
            });
            this.result4 = sum;


            if (this.result1 == this.maxResult || this.result2 == this.maxResult || this.result3 == this.maxResult || this.result4 == this.maxResult ) {
            this.gameEnd = false;
          }
        },


        winner: function(){
          if (this.result1 >  this.result2 && this.result1 > this.result3 && this.result1 > this.result4) {
            alert(this.names[0] + " Won");
          } else if (this.result2 >  this.result3 && this.result2 >  this.result4) {
            alert(this.names[1] + " Won");
          } else if (this.result3 > this.result4) {
            alert(this.names[2] + " Won");
          } else {
            alert(this.names[3] + " Won");
          }
        }
    }
})


