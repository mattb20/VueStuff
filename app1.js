new Vue({
  el: '#exercise',
  data: {
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    players: [
      {name: 'Mohamed Salah', team: 'Liverpool FC', goals: 32},
      {name: 'Harry Kane', team: 'Tottenham', goals: 30},
      {name: 'Kun Aguero', team: 21, goals: 18},
      {name: 'Jamie Vardy', team: 'Leicester City', goals: 20},
      {name: 'Raheem Sterling', team: 'Manchester City', goals: 18}
    ],
    object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'},
    show: true,
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});
