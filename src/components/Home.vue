<template>
    <!-- props -->
    <p>{{msg}}</p>
    <!-- slots -->
    <Chaild>
        <template v-slot:first-slot>
        <h6>This is slot from parent to child</h6>
        </template>

    <template v-slot:second-slot>
        <h1>This is Second Slot</h1>
    </template>
    </Chaild>
   
    <!-- filters methods -->
    <p>{{string.toUpperCase()}}</p>


    <!-- Date and time -->
    <ul class="list-group">
    <li class="list-group-item" v-show="date"><strong>Date:</strong> {{ date }}</li>
          <li class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</li>
        </ul>

        {{currentTime}}
    <!-- fontawosm use to add only cdn link in public html file -->
    <i class="fa fa-home"></i>

    <!-- pass data to function -->
    <h1>{{getData("Karam")}}</h1>

    <!-- Two way binding and counter -->
    <h2>{{Number(count)}}</h2>
    <input type="text" v-model="count" />
    <button @click="cliked">Cliked</button>

    <br /> <br /><br /> <br />
    <!-- get input field data -->
    <input type="email" v-model="email" />
    <br /> <br />
    <input type="password" v-model="password" />
    <br /> <br />
    <button @click="getInputValue">Submit</button>
    <br /> <br />
    <!-- if condition with switch -->
    <h1 v-if="show">Show</h1>
    <button @click="show=!show">Switch</button>
    <br /> <br />
    <!-- for loop -->
    <ul>
        <li v-for="item in technology" :key="item">
        {{item}}
        </li>
    </ul>
    <br /> <br />
    <!-- data pas parent to chaild -->
    <Chaild msg="This is Props" :counter="cliked" :getfromChild="getDataFromChild" />
    <br /> <br />
    <!-- useRef work -->
    <input type="text" ref="anyName" />
    <button @click="getRef">Cliked</button>
    <br /> <br />
<!-- get data from form -->
    <form>

<h5>{{form}}</h5>
<br /><br />
        <label>Email: </label>
        <input type="email" placeholder="Enter Email" v-model="form.email" />
        <br /><br />
        <label>Password: </label>
        <input type="password" placeholder="Enter Email" v-model="form.password" />
        <br /><br />

        <label>Select Country: </label>
        <select v-model="form.country">
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>Korea</option>
            <option>India</option>
        </select>
        <br /><br />

        <label>React: </label>
        <input type="checkbox" value="React" v-model="form.technology" />
        <br /><br />
        <label>Angular: </label>
        <input type="checkbox" value="Angular" v-model="form.technology" />
       <br /><br />
<h2>Gender</h2>
       <label>Male: </label>
        <input type="radio" value="male" name="gender" v-model="form.gender" />
        <br /><br />
        <label>Femail: </label>
        <input type="radio" value="female" name="gender" v-model="form.gender" />
       <br /><br />
    </form>

    <br /> <br />
</template>

<script>
import Chaild from './Chaild.vue'
import Header from './Header.vue'
export default {
    name:'Home',
    components:{
        Chaild,
        Header
    },
    data()
    {
        return {
            count: 0,
            email:null,
            password:null,

            show:false,

            technology:["React",'Node','Php','Vue','Angular'],

            form:{
                email:'',
                password:'',
                country:'',
                technology:[],
                gender:''
            },

            date: '',
          time: '',
          string:'filter',
          currentTime: 0
            
        }
    },
    props : {
        msg: Function
    },
    computed:{
        
    },
    methods: {
        getData(name){
            return name
        },
        cliked()
        {
          this.count =  Number(this.count + 1)
        },
        getInputValue(){
         console.log(this.email,this.password)
        },
        getDataFromChild(name){
            alert(name)
        },
        getRef(){
            this.$refs.anyName.focus()
            let getValue = this.$refs.anyName.value
            console.log(getValue,'get value');
        },


          printDate: function () {
            return new Date().toLocaleDateString();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },
         
    },
    mounted(){
        let id = localStorage.getItem('id')

        if(!id){
            this.$router.push({name:'SignIn'})
        }

        console.log(this.$route.path,'current-path');


          this.date = this.printDate();
          this.time = this.printTime();

          window.setInterval(() => {
            this.currentTime = new Date()
            
  }, 1000)
    },
    filters:{
        uppercase(value) {
      return value.toUpperCase();
    }
    },
    watch: {
  async currentTime(newValue, oldValue) {
    // format data easy way
    // var formatted_date = oldValue.toJSON().slice(0,10).replace(/-/g,'/');
    //         console.log(formatted_date);
  }
}

}
</script>

<style scoped>
h1{
    color: orange;
}
</style>