new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
              alert("Button was clicked!");
            },
            storeValue: function(event) {
              this.value = event.target.value;
            }
        }
    });
