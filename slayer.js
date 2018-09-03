new Vue({
  el: '#app',
  data: {
    monsterHealth: 70%,
    userHealth: 70%
  },
  computed: {
     newGame: function() {
       return {
         monsterHealth: 100%,
         userHealth: 100%
       }
    }
  }
})
