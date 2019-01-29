import Vue from 'vue'

Vue.filter('strMaxLength', function (str, num) {
  if (str == null) {
    return str
  } else {
    if (str.length > num) {
      str = str.slice(0, num) + '...'
    }
    return str
  }
})
