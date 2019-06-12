var vm = new Vue({
   el: '#paragraph',
   data: {
      items:[1,2,3,4],
      newItem: '',
      profiles:[
      	{	name: 'tipu',
      	 	age: '36',
      	}
      ],
      newProfiles: [
         {  name: '',
            age: ''
         }
      ],
      newProfilesName:'',
      newProfilesAge: ''
   },
   methods:{
   	addItems: function(){
   		this.items.push(this.newItem);
         this.newItem = ''
   		
   	},

      addProfiles: function(){
         this.profiles.push({name:this.newProfilesName, age:this.newProfilesAge});
         this.newProfilesName = '';
         this.newProfilesAge = ''
      },
      add: function(){
         alert("20");
      }
   }

})