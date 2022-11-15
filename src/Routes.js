import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/Auth/SignIn.vue'
import SignUp from './components/Auth/SignUp.vue'
import Profile from './components/Profile.vue'
import PageNotFound from './components/PageNoteFound.vue'
import GetApiData from './components/GetApiData.vue'
import SingleApiData from './components/GetSingleApiData.vue'
import PostUsers from './components/PostUsers.vue'
import GetUsers from './components/GetUsers.vue'
import UpdateUser from './components/UpdateUsers.vue'
import GetFromStore from './components/GetFromStore.vue'
import PostInStore from './components/PostInStore.vue'
import ClassBinding from './components/BindingClass.vue'




const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'SignIn',
        path:'/signIn',
        component:SignIn
    },
    {
        name:'SignUp',
        path:'/signUp',
        component:SignUp
    },
    {
        name:'Profile',
        path:'/profile',
        component:Profile
    },
    {
        name:'GetApiData',
        path:'/getApi',
        component:GetApiData
    },
    {
        name:'PostUsers',
        path:'/post-user',
        component:PostUsers
    },
    {
        name:'GetUsers',
        path:'/get-users',
        component:GetUsers
    },
    {
        name:'UpdateUser',
        path:'/update/:id',
        component:UpdateUser
    },
    {
        name:'SingleApiData',
        path:'/getApi/:id',
        component:SingleApiData
    },
    {
        name:'GetFromStore',
        path:'/get-store',
        component:GetFromStore
    },
    {
        name:'PostInStore',
        path:'/post-store',
        component:PostInStore
    },
    {
        name:'ClassBinding',
        path:'/bind-class',
        component:ClassBinding
    },
    {
        name:'PageNotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;