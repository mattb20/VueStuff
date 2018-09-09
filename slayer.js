new Vue({
  el: '#app',
  data: {
    monsterHealth: 100,
    userHealth: 100,
    gameRunning: false,
    userDamageOrHeal: '',
    attackOrHeal: '',
    monsterDamage: '',
    seen: false,
    victoryOrLoss: false,
    winOrLose: ''
  },
  methods: {
     newGame: function(event) {
         this.monsterHealth = 100;
         this.userHealth = 100;
         this.seen = false;
         this.gameRunning = true;
  },
  attack: function(event) {
      this.monsterAttack();
      this.monsterHealth -= 10;
      this.seen = true;
      this.userDamageOrHeal = 10;
      this.attackOrHeal = 'attacked';
      if ((this.monsterHealth) === 0)
      {
        this.victoryOrLoss = true;
        this.winOrLose = 'win';
        this.gameRunning = false;
      }
    },
    heal: function(event) {
      let heal = Math.floor(Math.random() * 11);
      this.userHealth += heal;
      userDamageOrHeal = heal;
      this.attackOrHeal = 'healed';
      this.monsterAttack();
    },
    monsterAttack: function() {
      let monsterAttack = Math.floor(Math.random() * 11);
      this.userHealth -= monsterAttack;
      this.monsterDamage = monsterAttack;
    },
    specialAttack: function() {
      let attack = Math.floor(Math.random() * 6) * 10;
      this.monsterHealth -= attack;
    },
    displayLossOrWinMessage: function() {
      this.victoryOrLoss = true;
      this.winOrLose = 'lost';
      this.gameRunning = false;
    }
  }
})
