new Vue({
  el: '#app',
  data: {
    monsterHealth: 100,
    userHealth: 100,
    gameRunning: false
  },
  methods: {
     newGame: function() {
        {
         this.monsterHealth = 100,
         this.userHealth = 100
       }
    }
  }
})
