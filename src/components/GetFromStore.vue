<template>

<h2>Get From Store</h2>
<h1>{{this.$store.state.name}}</h1>
<button type="button" @click="ChangeName" class="btn btn-success mb-3">Change Name</button>

<h3 class="mb-2">{{getApiData.length}}</h3>
<button @click="this.$router.push('/post-store')" type="button" class="btn btn-primary">Post in store</button>

<div class="card p-4 w-75 ms-auto me-auto mb-5">
        <table class="table table-striped">
  <thead>
    <tr class="align-items-center">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
       <!-- <th scope="col">Update User</th> -->
      <th scope="col">Delete User</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in getApiData" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.userName}}</td>
      <td>{{item.email}}</td>
      <td>{{item.age}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <!-- <td><button @click="update(item.id)" type="button" class="btn btn-success">Update</button></td> -->
      <td><button @click="Delete(item.id)" type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    
  </tbody>
</table>

    </div>





</template>

<script>

export default ({
    name:'GetFromStore',
    data(){
        return {
            getApiData:[],
        }
    },
    mounted(){
        this.$store.dispatch({
            type:'getApi'
        })
        // console.log(this.$store.state.data);
        setTimeout(()=>{
            this.getApiData=this.$store.state.names
        },1000)

        console.log(this.$route.path ,'aaaaaa');

    },
    methods:{
        ChangeName(){
            this.$store.dispatch({
                type:'ChangeName',name:'Muhammad Kashif',
            })
        },
        Delete(id){
            this.$store.dispatch({
                type:'DeleteUser',id:id,
            })
            this.getApiData=this.$store.state.names
        }
    }
})
</script>