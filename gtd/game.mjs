import {Player} from './player.mjs'
import { Input } from './input.mjs'
import { state } from './State.mjs'
import { screen } from './player.mjs'


import { StateMachine } from './State.mjs'
            let bgm 
         if (screen === 1 || screen === 2){
bgm = new Audio('./city.wav'); 
            bgm.play()
            bgm.loop = true    
bgm.volume = .5;

         }
window.addEventListener('load', function(){
    let moveTim = 200
    let moveNum = 0
    const gameBoard = canvas1;
    const board = gameBoard.getContext("2d");
    gameBoard.width = 1000
   gameBoard.height = 800


    class Game {
        constructor(width, height) {
            this.width = width
            this.height = height
            this.bh = gameBoard.height = window.innerHeight
            this.bw = gameBoard.width 
            this.player = new Player(this)
             this.idle = document.getElementById('witch')
             this.input = new Input()
             this.state = new StateMachine(this)
             this.incre = 0
             
        }
        update(context){
            if(bgm.currentTime === bgm.duration - 5){
                if (bgm.currentTime === bgm.duration - 5) {
                    bgm = new Audio('./city.wav'); 
            bgm.play()
            bgm.currentTime = 0; 
            bgm.loop = true    
        }}
                if(this.player.over === true){
                    console.log("are you serious rn")
        const talking = setInterval(this.player.help, 3500)
        return
    }
        this.player.update(this.input.keys, context)
        this.state.current()
        }


        draw(context, state){
           
            console.log('state: ' + state)
           if(state === 'idle'){
            if(this.incre % 2 === 0){

           this.player.draw(context)
            this.incre++
        }
           else{
            this.player.drawD(context)
            this.incre++
           }}

           
        }
    }

    const game = new Game(gameBoard.width, gameBoard.height)

    function move(){

        board.clearRect(0, 0, gameBoard.width, gameBoard.height)
        game.update(board)
        game.draw(board, state)

        const time = setInterval(function(){
        requestAnimationFrame(move)
        clearInterval(time)
        }, 200)


    }
    move()
    
})
