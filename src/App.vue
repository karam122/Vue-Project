<template>
  <!-- not show Header in SignIn And Signup -->
  <HeaderVue v-if="this.$route.path != '/signIn' && this.$route.path !== '/signUp' " />

  <router-link to="/">Home</router-link><br /><br />
  <router-link to="/signIn">Sign In</router-link><br /><br />
  <router-link to="/profile">Profile</router-link><br /><br />
  <router-link to="/getApi">Card</router-link><br /><br />

 <!-- emit event and also data child to parent -->
  <button @click="showPopup = true">Show Popup Component</button>
  <br />
  <Popup v-if="showPopup" @close='closePopup' />
  <router-view></router-view>
</template>

<script>

import HeaderVue from './components/Header.vue';
import Popup from './components/customEmitEvent.vue'
export default {
  name: 'App',
  components:{
    HeaderVue,
    Popup
  },
  data(){
    return {
      data :'my name is Kashif',
      showPopup : false
    }
  },
  // Provide is used for send data to child or sub-child without props down and get with inject method
  provide:{
      Age:50,
      userName:"Muhammad Atif"
    },
    methods:{
      closePopup(userName){
          this.showPopup = false
          alert(userName)
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
