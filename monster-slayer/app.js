new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        // myHP: 100,
        // enemyHP: 100,
        myDamages: [],
        enemyDamages: [],
        logs: [],
    },
    methods: {
        startNewGame: function () {
            this.gameStarted = true;
            this.myDamages = [];
            this.enemyDamages = [];
        },
        attack: function () {
            this.enemyDamages.push(getRandomInt(10));
            this.myDamages.push(getRandomInt(10));
            this.calcResult();
        },
        specialAttack: function () {
            this.enemyDamages.push(getRandomInt(20));
            this.myDamages.push(getRandomInt(10));
            this.calcResult();
        },
        heal: function () {
            this.myDamages.push(getRandomInt(20) * (-1));
            this.myDamages.push(getRandomInt(10));
            this.calcResult();
        },
        giveUp: function () {
            this.gameStarted = false;
        },
        calcResult: function() {
            if (this.result === 'draw') {
                this.gameStarted = false;
                alert('draw!');
            } else if (this.result === 'lose') {
                this.gameStarted = false;
                alert('lose!');
            } else if (this.result === 'win') {
                this.gameStarted = false;
                alert('win!');
            } else {
                return;
            }
        },
    },
    computed: {
        myHP: function () {
            return 100 - sum(this.myDamages);
        },
        enemyHP: function () {
            return 100 - sum(this.enemyDamages);
        },
        result: function () {
            if (this.myHP <= 0 && this.enemyHP <=0) {
                return 'draw';
            } else if (this.myHP <= 0) {
                return 'lose';
            } else if (this.enemyHP <= 0) {
                return 'win';
            } else {
                return '';
            }
        }
    },
})

function sum(arr) {
    return arr.reduce(function (prev, current, i, arr) {
        return prev + current;
    }, 0);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}