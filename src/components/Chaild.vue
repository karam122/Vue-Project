<template>
    <h1>Chaild Component</h1>
    <slot name="first-slot"></slot>
    <slot name="second-slot"></slot>
    <h2>{{msg}}</h2>
    <h2>Provide From App.vue and inject in Child: Age is => {{Age}}</h2>
    <h2>Provide From App.vue and inject in Child: userName is => {{userName}}</h2>
    <button @click="counter">counter</button>
<br /><br/>
<!-- send to parent -->
    <button @click="getfromChild(data)">Child to Parent</button>
  </template>
  
  <script>
  export default {
    name: 'Chaild',
    mounted(){
         
    },
    data(){
        return{
            data :'Send Data from child to parent'
        }
    },
    props:{
        msg: String,
        counter: Function,
        getfromChild:Function,
    },
    inject: ['Age','userName']
   
    
  }
  </script>