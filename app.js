new Vue({
    el: '#app',
    data: {
        victoria: true,
        playerScore: null,
        monsterScore: null,
        scoresArray: [],
        minScore: 0,
        maxScore: 0,
        scoreLifePlayer: 100,
        scoreLifeMonster: 100,
        startNewPlay: true
    },
    // computed: {
    //     showStartNewPlay() {
    //         this.startNewPlay = !this.startNewPlay
    //     }
    // },
    methods: {
        setAttackScore() {
            this.playerScore = Math.floor(Math.random() * 10) + 1;
            this.monsterScore = Math.floor(Math.random() * 10) + 1;
            this.scoresArray.push(this.playerScore, this.monsterScore)
            // console.log(this.scoresArray)

            
            this.minScore = Math.min.apply(null, this.scoresArray)
            this.maxScore = Math.max.apply(null, this.scoresArray)

            this.scoresArray = []

            this.scoreLifePlayer = (this.scoreLifePlayer - this.maxScore)
            this.scoreLifeMonster = (this.scoreLifeMonster - this.minScore)

            // console.log(this.maxScore, this.minScore)
        },
        setSpecialAttackScore() {
            this.playerScore = Math.floor(Math.random() * 10) + 1;
            this.monsterScore = Math.floor(Math.random() * 10) + 1;
            this.scoresArray.push(this.playerScore, this.monsterScore)

            
            this.minScore = Math.min.apply(null, this.scoresArray)
            this.maxScore = Math.max.apply(null, this.scoresArray)

            this.scoresArray = []

            this.scoreLifePlayer = (this.scoreLifePlayer - this.minScore)
            this.scoreLifeMonster = (this.scoreLifeMonster - this.maxScore)

            // console.log(this.minScore, this.maxScore)
        },
    },
})