import Vue from 'vue'
import Vuex from 'vuex'
import MyAjax from './../MyAjax'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    msg: '测试',
    num: 10,
    classList: []
  },
  mutations: {
    increment (state) {
      state.msg = '测试过了'
      state.num++
    },
    getClassList (state) {
      console.log('111111111')
      const url = 'http://datainfo.duapp.com/shopdata/getclass.php'
      MyAjax.vueJson(url, function (data) {
        console.log(data)
        state.classList = data
      }, function (err) {
        console.log(err)
      })
    }
  }
})
