
<template>
    <div>
        <input type="text" v-model="word" />
        <ul v-for="it in list">
            <li>{{it}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                    word:'',
                    list:[1,2,3,3,4,5,6]
            }
        },
        watch:{

                word:function(new1,old1){
                    console.log(new1,old1);
                    var that=this
                    clearTimeout(this.time)
                  this.time= setTimeout(function() {
                        var url= "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?";
                        that.$http.jsonp(url,{
                            jsonp:"cb",
                            params:{
                                wd:new1
                            }
                        }).then(function(response){
                            console.log(response)
                                that.list = response.body.s;
                        },function(err){
                            console.log(err)
                        })
                   }, 500)

                }





        }
            







       
    }

</script>