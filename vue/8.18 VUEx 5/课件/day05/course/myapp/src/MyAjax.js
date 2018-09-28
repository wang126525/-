import Vue from 'vue'
export default {
  vueJson (url, successCallback, failCallBack) {
    Vue.http.get(url).then(function (response) {
      successCallback(response.body)
    }, function (err) {
      failCallBack(err)
    })
  }
}
