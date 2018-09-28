



import "./scss/main.scss";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)



import App from "./md/App.vue"
import Home from "./md/main.vue"
import Kind from "./md/kind.vue"
import More from "./md/more.vue"
import Cart from "./md/cart.vue"
import User from "./md/user.vue"


var routes=[
    {path:"/home",component:Home},
    {path:"/kind",component:Kind},
    {path:"/more",component:More},
    {path:"/cart",component:Cart},
    {path:"/user",component:User}
]

var router=new VueRouter({
    routes
})

var vu= new Vue({
    el:"#app",
    router:router,
    data:{

    },
    components:{
        "v-app": App
    }

})