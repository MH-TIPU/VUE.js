var vm = new Vue({
   el: '#paragraph',
   data: {
      msg: 'nice to meet you'
   },
   methods:{
   	message:function(name){
   		return 'Hi '+name + ", " + this.msg;
   	}
   }
})