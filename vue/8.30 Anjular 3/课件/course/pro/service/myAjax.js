
    app.service("myAjax",function(){
        //写法与面向对象一样
        this.fetch = function(url,success,fail){
          fetch(url).then(function(response) {
            return response.json();
          }).then(function(data) {
            success(data)
          }).catch(function(e) {
            //失败
            fail(e)
          });
        }
        
        this.fetchJsonp = function(url,success,fail){
          console.log("请确保引入了fetch-jsonp,地址为https://cdn.bootcss.com/fetch-jsonp/1.1.1/fetch-jsonp.min.js")
          fetchJsonp(url).then(function(response) {
            return response.json();
          }).then(function(data) {
            success(data)
          }).catch(function(e) {
            //失败
            fail(e)
          });
        }
      })