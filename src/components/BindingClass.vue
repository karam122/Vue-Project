<template>
    <!-- simple logical classes -->
    <h1 v-bind:class="show ? 'success' : 'red'">Binding Class</h1>
    <button @click="show=!show" >Switch</button>

    <!-- more classess applied 1 time -->
    <h1 v-bind:class="show ? ['success','font','color']:'red'">Binding Class</h1>

    <!-- bind style -->
    <h1 v-bind:style="{color:'blue',fontSize:'80px'}">Binding Style</h1>

    <!-- with object inline more styles -->
    <h1 v-bind:style="[fontsObject,colorObject]">With Object More styling</h1>

</template>

<script>
export default {
    name:'BindingClass',
    data(){
        return {
            show : true,
            colorObject:{
                color:'yellow',
                backgroundColor:'skyblue'
            },
            fontsObject:{
                    fontStyle:'italic',
                    fontSize:'100px'
                },

        }
    }
}
</script>

<style scoped>
.red{
    background-color: red;
}
.success{
    background-color: greenyellow;
}
.font{
font-style: italic;
}
.color{
color:skyblue
}
</style>