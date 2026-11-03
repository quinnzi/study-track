export let state


export class StateMachine {
    constructor(game) {
        this.game = game
         if(this.game.input.keys)
          {  this.keyArray = this.game.input.keys}
         

    }
    current(){

    if(this.keyArray.length === 0){
            console.log('keyRay'  + this.keyArray)
            state = 'idle'
         }
            if(this.keyArray.includes('ArrowRight')){
            state = 'move' 
            
        }
            if(this.keyArray.includes('ArrowLeft')){
            state = 'move' }
                        if(this.keyArray.includes('ArrowDown')){
            state = 'move' }
            if(this.keyArray.includes('ArrowUp')){
            state = 'move'  }
            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowRight'))
                {
                    state = 'move' }

            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowLeft'))
                {  state = 'move' 
                }
    }
}