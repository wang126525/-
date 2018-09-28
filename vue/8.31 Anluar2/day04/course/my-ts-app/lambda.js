var app = {
    name: "test",
    fn: function () {
        var _this = this;
        console.log(this.name);
        //  var that = this;
        //  setTimeout(function(){
        //     console.log(that.name);
        //  },2000)
        setTimeout(function () {
            console.log(_this.name);
        }, 2000);
    }
};
app.fn();
