new Vue({
  el: '#app',
  data: {
    monsterHealth: 100,
    userHealth: 100,
    gameRunning: false
  },
  methods: {
     newGame: function(event) {
         this.monsterHealth = 100;
         this.userHealth = 100;
  },
  attack: function(event) {
      this.monsterAttack();
      this.monsterHealth -= 10;
    },
    heal: function(event) {
      this.userHealth += Math.floor(Math.random() * 11);
      this.monsterAttack();
    },
    monsterAttack: function() {
      this.userHealth -= Math.floor(Math.random() * 11);
    },
  }
})
