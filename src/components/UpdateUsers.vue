<template>
    <div className="container-fluid">
    
        <div class="card p-4 w-50 ms-auto me-auto">
    
            <h2>Update User</h2>
    
            <form className="mt-4">
                <div class="form-group">
                    <label for="exampleInputUserName" class="mb-1">UserName</label>
                    <input type="text" class="form-control" id="exampleInputUserName" v-model="updateUser.userName" aria-describedby="emailHelp" placeholder="Enter Username">
                </div>
    
                <div class="form-group">
                    <label for="exampleInputEmail1" class="mb-1 mt-3">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="updateUser.email" aria-describedby="emailHelp" placeholder="Enter Email">
    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-3">Contact</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" v-model="updateUser.contact" placeholder="Enter Phone Number">
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-3">Age</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" v-model="updateUser.age" placeholder="Enter Age">
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-3">Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" v-model="updateUser.address" placeholder="Enter Address">
                </div>
    
                <button type="button" v-on:click="handleSubmit" class="btn btn-success mt-4">Update</button>
                
            </form>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    import {useRoute} from 'vue-router'
    
    export default {
        name: 'UpdateUsers',
        data(){
            return {
                updateUser:{
                    userName:'',
                    email:'',
                    contact:'',
                    age:'',
                    address:''
                },

                getId:''
            }
        },
       async mounted(){
            const getProfileId = useRoute()
            this.getId=getProfileId.params.id
            console.log('getProfileId.params.id',getProfileId.params.id);

            let result = await axios.get(`http://localhost:3000/userData/${getProfileId.params.id}`)
            this.updateUser=result.data
            

        },
        methods:{
           async handleSubmit(){
                let result = await axios.put(`http://localhost:3000/userData/${this.getId}`,{
                    userName:this.updateUser.userName,
                    email:this.updateUser.email,
                    contact:this.updateUser.contact,
                    age:this.updateUser.age,
                    address:this.updateUser.address
                })
                console.log(result,'post result');
                if(result.status===200){
                    alert('User successfully updated')
                    this.$router.push(`/get-users`)
                }
            }
    
        },
        
    }
    </script>
    