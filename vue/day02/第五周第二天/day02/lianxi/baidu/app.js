
import Vue from 'vue';

import head from "./md/head.vue";

new Vue ({
    el:"#app",
    data:{
        msg:"hellowword"
    },
    components:{
        "v-input":head
    }
})
