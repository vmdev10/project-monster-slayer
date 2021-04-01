new Vue({
    el: '#app',
    data: {
        victoria: true,
        scoreOne: null,
        scoreTwo: null,
        scoresArray: [],
        minScore: 0,
        maxScore: 0,
        scoreLifePlayer: 100,
        scoreLifeMonster: 100,
        scoreCurePlayer: null,
        scoreCureMonster: null,
        startNewGame: true,
        redBar: 'progress-bar-red',
        greenBar: 'progress-bar-green'
    },
    methods: {
        setAttackScore() {
            this.scoreOne = Math.floor(Math.random() * 10) + 1;
            this.scoreTwo = Math.floor(Math.random() * 10) + 1;
            this.scoresArray.push(this.scoreOne, this.scoreTwo)
            
            this.minScore = Math.min.apply(null, this.scoresArray)
            this.maxScore = Math.max.apply(null, this.scoresArray)
            
            this.scoresArray = []

            this.scoreLifePlayer = (this.scoreLifePlayer - this.maxScore)
            this.scoreLifeMonster = (this.scoreLifeMonster - this.minScore)
            
            // console.log(this.maxScore, this.minScore)

            if(this.scoreLifePlayer <= 0) {
                this.scoreLifePlayer = 0
            } else if (this.scoreLifeMonster <= 0) {
                this.scoreLifeMonster = 0
            }
        },
        setSpecialAttackScore() {
            this.scoreOne = Math.floor(Math.random() * 10) + 1;
            this.scoreTwo = Math.floor(Math.random() * 10) + 1;
            this.scoresArray.push(this.scoreOne, this.scoreTwo)

            
            this.minScore = Math.min.apply(null, this.scoresArray)
            this.maxScore = Math.max.apply(null, this.scoresArray)

            this.scoresArray = []

            this.scoreLifePlayer = (this.scoreLifePlayer - this.minScore)
            this.scoreLifeMonster = (this.scoreLifeMonster - this.maxScore)

            if(this.scoreLifePlayer <= 0) {
                this.scoreLifePlayer = 0
            } else if (this.scoreLifeMonster <= 0) {
                this.scoreLifeMonster = 0
            }

            // console.log(this.minScore, this.maxScore)
        },
        setCureScore() {
            this.scoreOne = Math.floor(Math.random() * 10) + 1;
            this.scoreTwo = Math.floor(Math.random() * 10) + 1;

            this.scoreCurePlayer = (this.scoreLifePlayer + this.scoreOne - this.scoreTwo)
            this.scoreLifePlayer = this.scoreCurePlayer

            console.log(this.scoreOne, this.scoreTwo)
        },
        showStartGame() {
            this.startNewGame = true
            this.scoreLifePlayer = 100
            this.scoreLifeMonster = 100
        }
    },
})