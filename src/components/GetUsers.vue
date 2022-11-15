<template>
<div className="container-fluid">
    <div class="mb-3 d-flex justify-content-evenly">
    <h2>Get Users</h2> 
    <button @click="AddUser" type="button" class="btn btn-success">Add Users</button>
</div>
    <div class="card p-4 w-75 ms-auto me-auto">
        <table class="table table-striped">
  <thead>
    <tr class="align-items-center">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Update User</th>
      <th scope="col">Delete User</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in userData" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.userName}}</td>
      <td>{{item.email}}</td>
      <td>{{item.age}}</td>
      <td>{{item.contact}}</td>
      <td>{{item.address}}</td>
      <td><button @click="update(item.id)" type="button" class="btn btn-success">Update</button></td>
      <td><button @click="Delete(item.id)" type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    
  </tbody>
</table>

    </div>
</div>
</template>

    
<script>
import axios from 'axios';

export default {
    name: 'GetUsers',
    data() {
        return {
            userData:[]
        }
    },
    async mounted() {
        // e.preventDefault()
        let result = await axios.get('http://localhost:3000/userData')
        console.log(result);
        this.userData=result.data
            },
           methods:{
            update(id){
                    this.$router.push(`/update/${id}`)
            },
          async Delete(id){
             await axios.delete(`http://localhost:3000/userData/${id}`)
             .then((res)=>{
              console.log(res,res)
              alert(id + ' ' + "id is successfully deleted")
             }).catch((err)=>{
              alert(err)
             }).finally(()=>{

             })
                        
            },
            AddUser(){
                this.$router.push(`/post-user`)
            }
           }

    }
</script>
