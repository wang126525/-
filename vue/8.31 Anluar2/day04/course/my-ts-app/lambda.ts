var app = {
  name:"test",
  fn:function(){
    console.log(this.name);
//  var that = this;
//  setTimeout(function(){
//     console.log(that.name);
//  },2000)
    setTimeout(() => {
       console.log(this.name);
    },2000)
  }
}
app.fn();
