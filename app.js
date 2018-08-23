new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        watch: {
          counter: function(value) {
            var vm = this;
            setTimeout(function() {
              vm.value = 0;
            }, 2000)
          }
        },
        methods: {
          result: function() {
            return this.value == 37 ? 'done' : 'not there yet';
          }
        }
    });
