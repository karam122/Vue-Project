<template>
    <div class="container-fluid formContainer justify-content-center">
        <div className="row formWrapper bg-white d-flex align-items-center">
            <div className="d-flex justify-content-center">
        <div class="card w-75 mt-5">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h1>{{SingleApiData.id}}</h1>
    <h5 class="card-title">{{SingleApiData.name}}</h5>
    <p class="card-text">{{SingleApiData.email}}</p>
    <p class="card-text">{{SingleApiData.phone}}</p>
    <p class="card-text">{{SingleApiData.website}}</p>
    <!-- <a @click="GetSingleData(item.id)" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</div>
</div>
    </div>

    
</template>

<script>
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
    name:'GetApiData',
    data(){
        return {
            SingleApiData:[]
        }
    },
    async mounted(){
        const getProfileId = useRoute()
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users/${getProfileId.params.id}`)
        console.log(res.data,'res');
        this.SingleApiData=res.data
    },
   
}
</script>

