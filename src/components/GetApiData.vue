<template>
<h1>Get Api Component</h1>
<div class="container-fluid">

    <div v-if="loading" class="spinner-border text-primary" role="status">
  
        </div>

    <div v-else class="card w-25 m-2 d-inline-block" v-for="item in ApiData" :key="item.id">
        <!-- <img src="" class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h1>{{item.id}}</h1>
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.company.catchPhrase}}</p>
            <a @click="GetSingleData(item.id)" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'GetApiData',
    data() {
        return {
            ApiData: [],
            loading:false
        }
    },
    async mounted() {
        this.loading=true
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
        console.log(res.data, 'res');
        this.ApiData = res.data
        // this.loading=false
                    })
                    .catch((error) => {
                        console.log(error)
                        this.loading =  false
                    }).finally(() => {
                        this.loading = false
                    });
                    
         
 

    },
    methods: {
        GetSingleData(id) {
            this.$router.push(`/getApi/${id}`)
        },

    }
}
</script>

<style scoped>
.card {
    cursor: pointer;
}

.card-text {
    height: 50px;
}
</style>
