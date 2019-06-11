var vm = new Vue({
   el: '#paragraph',
   data: {
      items:[1,2,3,4],
      newItem: '',
      profiles:[
      	{	name: 'tipu',
      	 	age: 36,
      	}
      ],
      newProfiles: ''
   },
   methods:{
   	addItems: function(){
   		this.items.push(this.newItem)
   		
   	}
   }

})