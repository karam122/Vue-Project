<template>
    <div className="container-fluid">
        <h2 class="mb-3">Add Users</h2>
    
        <div v-if="loading" class="spinner-border text-primary" role="status">
    
        </div>
    
        <div v-else class="card p-4 w-50 ms-auto me-auto">
    
            <form className="mt-4"  @submit="submitFormStore">
                <div class="form-group">
                    <label for="exampleInputUserName" class="mb-1 d-flex text-success">UserName : </label>
                    <input type="text" class="form-control" id="exampleInputUserName" v-model="postUser.userName" aria-describedby="emailHelp" placeholder="Enter Username">
                    <p class="userName-error">{{userError}}</p>
                </div>
    
                <div class="form-group">
                    <label for="exampleInputEmail1" class="mb-1 mt-1 d-flex text-success">Email address :</label>
                    <input type="email"  class="form-control" id="exampleInputEmail1" v-model="postUser.email" aria-describedby="emailHelp" placeholder="Enter Email">
                    <p class="userName-error">{{emailError}}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-1 d-flex text-success">Contact :</label>
                    <input type="number"  class="form-control" id="exampleInputPassword1" v-model="postUser.contact" placeholder="Enter Phone Number">
                    <p class="userName-error">{{contactError}}</p>
                </div>
    
                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-1 d-flex text-success">Age :</label>
                    <input type="number"  class="form-control" id="exampleInputPassword1" v-model="postUser.age" placeholder="Enter Age">
                    <p class="userName-error">{{ageError}}</p>
                </div>
    
                <div class="form-group">
                    <label for="exampleInputPassword1" class="mb-1 mt-1 d-flex text-success">Address :</label>
                    <input type="text"  class="form-control" id="exampleInputPassword1" v-model="postUser.address" placeholder="Enter Address">
                    <p class="userName-error">{{addressError}}</p>
                </div>
    
                <button type="submit" class="btn btn-success mt-4">Send store</button>
                <button type="button" @click="this.$router.push('/get-store')" class="btn btn-success mt-4">Get Store data</button>
    
            </form>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
        name: 'PostInStore',
        data() {
            return {
                postUser: {
                    userName: '',
                    email: '',
                    contact: '',
                    age: '',
                    address: ''
                },
                loading: false,
    
                userError:null,
                emailError:null,
                contactError:null,
                ageError:null,
                addressError:null,
            }
        },
        
        methods: {
            async submitFormStore(e) {
                e.preventDefault()
                // this.userError=null
                // this.emailError=null
                // this.contactError=null
                // this.ageError=null
                // this.addressError=null
    
                    if(this.postUser.userName == ''){
                        this.userError = "username is required"
                        console.log('error',this.error);
                    }
                    else if(this.postUser.email == ''){
                        this.emailError = "email is required"
                        console.log('error',this.error);
                    }
                    else if(this.postUser.contact == ''){
                        this.contactError = "contact is required"
                        console.log('error',this.error);
                    }
                    else if(this.postUser.age == ''){
                        this.ageError = "age is required"
                        console.log('error',this.error);
                    }
                    else if(this.postUser.address == ''){
                        this.addressError = "address is required"
                        console.log('error',this.error);
                    }
                    
                    else{
                        this.$store.dispatch({
                            type:'postUser',data:this.postUser
                        })
                //         e.preventDefault()
                // this.loading = true
                // await axios.post('http://localhost:3000/userData', {
                //     userName: this.postUser.userName,
                //     email: this.postUser.email,
                //     contact: this.postUser.contact,
                //     age: this.postUser.age,
                //     address: this.postUser.address
                // }).then((result) => {
                //     console.log(result, 'post result');
                //     if (result.status === 201) {
                //         alert('User successfully added')
                //         this.$store.dispatch({
                //             type:'postUser',data:result.data
                //         })
                //     }
                    
                // }).catch((error) => {
                //     alert('Something wrong')
                //     this.loading = false
                // }).finally(() => {
                //     this.loading = false
                    
                // })

                           
    
                    // this.postUser.userName=''
                    // this.postUser.email=''
                    // this.postUser.contact=''
                    // this.postUser.age=''
                    // this.postUser.address=''
    
                    }
                  
                
                    
                
    
            },
            
    
    
        },
    
    }
    </script>
    
    <style scoped>
    .userName-error{
        position: relative;
        color: red;
        text-align: left;
    }
    
    </style>
    