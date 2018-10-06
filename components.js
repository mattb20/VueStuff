Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
});

new Vue({
  el: '#app'
})

new Vue({
  el: '#app2'
})
