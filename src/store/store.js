import axios from 'axios'
import {createStore} from 'vuex'
import ApiStore from '../assets/ApiStore'

export default createStore({
   state:{
    name:'Rao kashif',
    ApiStore:ApiStore,
    data:[],
    names:[{id:'1',userName:'kashif',email:'raokashif@gmail.com',age:24,contact:'346457',address:'lahore'},],
    cartData:[]
   },
   mutations:{
    setNewName(state,payload){
        state.name = payload.name
    },
    getApiData(state,payload){
        console.log(state.data,'stateData');
        state.data = payload
    },
    DeleteStoreUser(state,payload){
       let data = state.names.filter((item)=>item.id !== payload.id)
        state.names = data
    },
    PostStoreUser(state,payload){
        // // let data = [...state.data.concat(payload)]
        // // state.data =[...state.data,data]
        // return{...state,state:{...state.data.concat(payload)}}
        console.log('payload',payload.data);
        state.names = [payload.data,...state.names]
     },
     AddCart(state,payload){
        let cart = state.ApiStore.filter((item)=>item.id===payload.id)
        console.log(cart,'cart');
        state.cartData = [cart,...state.cartData]
        // console.log(state.cartData,'state.cartData');
     }

   },
   actions:{
    ChangeName(context,payload){
        context.commit('setNewName',payload)
    },
   async getApi(context){
        await axios.get('http://localhost:3000/userData')
        .then((res)=>{
            // console.log(res);
            context.commit('getApiData',res.data)

        }).catch((err)=>{
            console.log('error',err);
        })
    },
   DeleteUser(context,id){
        context.commit('DeleteStoreUser',id)
    },
postUser(context,data){
        alert('data')
        context.commit('PostStoreUser',data)
        console.log(data);       
    },
    AddtoCart(context,payload){
        context.commit('AddCart',payload)
    }
   }
})
