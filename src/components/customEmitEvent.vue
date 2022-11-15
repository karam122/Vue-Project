<template>
<h2>This is EmitEvent Component Popup</h2>
<input type="text" v-model="userName">
<button @click="$emit('close',userName)">Close</button>
</template>

<script>
export default {
    name:'customEmitEvent',
    data(){
        return {
            userName:''
        }
    },
    emits:['close']
}
</script>