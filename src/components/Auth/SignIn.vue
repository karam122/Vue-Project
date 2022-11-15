<template>
<div class="card mt-3 w-50 ms-auto me-auto p-5">
    <h1>Login Component</h1>
    <div className="container">
        <form className="justify-content-center">
            <div class="form-group mt-3">
                <label for="exampleInputEmail1" class="mb-1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="SignIn.email" aria-describedby="emailHelp" placeholder="Enter email">

            </div>
            <div class="form-group mt-3">
                <label for="exampleInputPassword1" class="mb-1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="SignIn.password" placeholder="Password">
            </div>

            <button type="submit" v-on:click="login" class="btn btn-success mt-4">Log in</button>

            <p class="mt-3">
                Create an accounts? <router-link to="/signUp">Sign Up</router-link>
            </p>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignIn',
    data() {
        return {
            SignIn: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login(e) {
            e.preventDefault()
            let res = await axios.get(`http://localhost:3000/Users?email=${this.SignIn.email}&password=${this.SignIn.password}`)

            if (res.status === 200 && res.data.length > 0) {
                localStorage.setItem('id', res.data[0].id)
                this.$router.push({
                    name: 'Home'
                })
            }
            console.log('SignIn res', res);
        }
    },
    mounted() {
        let id = localStorage.getItem('id')

        if (id) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>
