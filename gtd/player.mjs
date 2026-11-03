let eNum = 0
let inc = 0
let wNum = 0
let enemySpeed = 30
let totalSpawned = 0
let bugState = 0
let bugHealth = 45
let supern = 1
let hitTimer = 10
let over = false
if(bugHealth === 0){
    over = true
}
export let screen = 1

let linesDone = 0
let linesNeeded = 0
let currentChar = "rando"
let hits = 0
let ei = 0
const studyLines = [
   ["You studied me today, congrats! Here are your coins :)"],
    ["You haven't studied me today :(. Go study and I can give you coins to upgrade your weapons!"]
]

const items = []
     let board
     const subjects = [
    {name: "Eli", 
        xPosition: 1200, 
        yPosition: 50, 
        y:0, 
        x: 640,
        dialouge:[
            [ {n: "I DON'T WANT SUCH A NAIVE FRAGILE FACE IN MY EYELINE RIGHT NOW. GO AWAY!!"}],
            [{n:"WHAT--Oh, Rosies Rose? Yuh. I know where it is"},
                {n:"I threw it in the river :D"},
                {n:"Go tell her that, and smile real real wide as you do."}]//thenn after this, items.push('rose')

        ],
        neededItem: "Rosie"
    }
    //needed item is the item you need to have in the array of items in order to unlock the second round of dialouge


]


const weapons = []
let spawned = []
let shot = []
let shrinkFac = 1
export class Player {
    constructor(game) {
        this.over = over
        this.game = game
        this.height = 320 
        this.width = 320 
        this.pheight = this.height * shrinkFac
        this.char = "English"
        this.x = 0  // across. this is obvious stuff cmon now. use thes to move the player.
        this.y = this.game.height - this.pheight -150  // this is bc html canvas y is inverted. y starts from  the top of the canvas. say the canvas is 20 cm and the sprite is 6. subtracting gives you 4 which is the amount of units you'd need to travel to get to 6. So y is basically distance from top.
        this.idle = document.getElementById('witch')
         this.bacteria = document.getElementById('bac')
        this.sprint = 1.4
         this.floor = document.getElementById('floor')
         this.enemies = document.getElementById('e')
        this.bug = document.getElementById('bug')
         this.forest = document.getElementById('forest')
         this.goo = document.getElementById('goo')

    }
trackPosition(context){

    if (weapons.length != 0){
    weapons.forEach((w)=>{
        if(screen === 4)
{  
    if (Math.abs(this.game.width - 750 - w.xPosition) < 200){
                  console.log(w.xPosition)
                bugHealth = bugHealth - w.points
                document.getElementById("health").style.width = `${bugHealth/45 *100}%`
                weapons.splice(wNum, 1)
                console.log(weapons)
                console.log(spawned)
                if (hitTimer > 0) {
  context.fillStyle = '#ff4444a4';
  context.fillRect(this.game.width - 800, this.y, 700, 700);
 hitTimer--;
} else {
 context.drawImage(this.bug, 0, 280, 450, 560, this.game.width - 800, this.y, 700, 700);
 hitTimer = 10;
}
            }

                if(bugHealth < 1){
                weapons.splice(wNum, 1)
               eNum = 0
                wNum = 0
                return
            }
        console.log(spawned)
        console.log(weapons)}

        if(spawned.length === 0){
            this.spawnEnemies(context)
        }
        for (const enemy of spawned) {

            if(w.xPosition >= this.game.width){
                weapons.splice(wNum, 1)
            }
                if (Math.abs(enemy.xPosition - w.xPosition) < 200){
           
                  console.log(enemy.xPosition)
                  console.log(w.xPosition)
                enemy.points = enemy.points - w.points
                weapons.splice(wNum, 1)
                 if (hitTimer > 0) {
  context.fillStyle = '#ff444486';
  hitTimer--;
} else {
    context.drawImage(this.enemies, enemy.x, enemy.y, this.width, this.height, enemy.xPosition, this.game.height - 200  - 150, 280, 280)
 hitTimer = 10;
}
                console.log(weapons)
                console.log(spawned)
            }
             
            
                if(enemy.points < 1){
                            ei = Math.floor(Math.random() * 12)
                            
                eNum = spawned.indexOf(enemy)
               spawned.splice(eNum, 1)
                weapons.splice(wNum, 1)
               eNum = 0
                wNum = 0
                   supern++
            }

            


          
        }
        w.xPosition = w.xPosition + 75
         context.drawImage(this.enemies, w.x, w.y, this.width, this.height, w.xPosition,this.game.height - 230  - 150, 200, 200)
})}

}
shoot(weapon, context){
if (weapons.length === 4 * shrinkFac){
    document.getElementById('int').textContent = `You can only shoot ${4 * shrinkFac} at a time`
    return
}
    switch (weapon) {
        case "Rocket":
            if(items.includes("Rocket"))
{
    context.drawImage(this.enemies, 320, 320, this.width, this.height, this.x, this.game.height - 150  - 150, 200, 200)
    weapons.push({ points: 7,
        xPosition: this.x, 
        yPosition: this.y - 470, 
            x: 320,
        y: 320
    }
    )
}
else{
document.getElementById('int').textContent = "You don't have the rocket launcher :("
return
}

            break;
    case "Knife":
        if(items.includes("Knife"))
{
    context.drawImage(this.enemies, 0, 640, this.width, this.height, this.x, this.game.height - 250 - 150, 200, 200)
        weapons.push({ points: 3,
        xPosition: this.x, 
        yPosition: this.y - 470, 
        x: 0,
        y: 640
    })
}
else{
document.getElementById('int').textContent = "You don't have the throwing knife :("
return
}
    break
    case "Stone":
        if(items.includes("Stone"))
{

               context.drawImage(this.forest, 0, 0, this.game.bw, this.game.bh)
               context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
    context.drawImage(this.enemies, 320, 640, this.width, this.height, this.x, this.game.height - 200 - 150, 200, 200)
        weapons.push({ points: 1,
        xPosition: this.x, 
        yPosition: this.y - 470, 
            x: 320,
        y: 640})
}
else{
document.getElementById('int').textContent = "You don't have the pebble :("
return
}
        break
        default:
            break;
    }




}


spawnEnemies(context){
    console.log("We hit it")
    if(shrinkFac === 0.125){
         spawned.splice(0, spawned.length)
        return
    }
    if (totalSpawned === 10 && screen === 3){

        const keyz = this.game.input.keys
            if(keyz.includes("Space")){

                document.getElementById("dia").style.display = "none"
document.getElementById("log").style.display = "none"
                

            }
document.getElementById("dia").style.display = "flex"
document.getElementById("log").style.display = "block"
document.getElementById('log').textContent = "I think they're all gone now...It's safe to continue on."
document.getElementById('char').textContent = "You"
return
    }
       
enemySpeed =  Math.random() * 70 + 30
const enemies =[
    {   type: "ghost",
        points: 5,
        xPosition: board, 
        yPosition: 400, 
        x: 0, 
        y:0, 
    },
    {   type: "spore",
        points: 3,
        xPosition: board, 
        yPosition: 300, 
        x: 0, 
        y: 320, 
    },
     {   type: "super-spore",
        points: 6,
        xPosition: this.game.width - 600, 
        yPosition: 300, 
        x: 320, 
        y: 0
    }

]

if (spawned.length === 0)
     { 
    if(screen === 3){
    let inc = Math.floor(Math.random() * 2)
    console.log(enemies[inc])
    console.log(this.game.width)
enemies[inc].xPosition = this.game.width
    spawned.push(enemies[inc])
     totalSpawned++
     return
    }
    if(screen === 4){

   inc = Math.floor(Math.random() + 2)
     enemySpeed =  Math.random() * 10 + 110 + 10 * supern
     if(spawned.length < 2){
    spawned.push(enemies[inc])
}

    if(bugState < 15)
    {context.drawImage(this.bug, 0, 280, 450, 560, this.game.width - 800, this.y, 700, 700)
        bugState++
    }
if (bugState === 15){
    context.drawImage(this.bug, 0, 280, 450, 560, this.game.width - 800, this.y, 700, 700)
    bugState = 0
}
     totalSpawned++
     
   
    }
    
}
   }

drawEnemies(context){
      if(shrinkFac === 0.125){
         spawned.splice(0, spawned.length)
        return
    }
       context.drawImage(this.forest, 0, 0, this.game.bw, this.game.bh)
       context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)

    this.spawnEnemies(context)

     spawned.forEach(e => {
            console.log(spawned)
    console.log(e)
        if(Math.abs(e.xPosition - this.x) < 200 * shrinkFac){
            hits++
            if(hits != 3){
             e.xPosition = e.xPosition + 62}
            if(Math.abs(e.xPosition - this.x) < 200 * shrinkFac){

            shrinkFac = shrinkFac / 2
            document.getElementById("witch").style.filter = `grayscale(${12/shrinkFac}%)`
            console.log(spawned)
            setTimeout(() => {
                console.log("waiting...")
            }, 2000);}
            
        }
        if(e.xPosition - this.x < 0){
            e.xPosition = e.xPosition + enemySpeed
            context.clearRect(0, 0, this.game.width, this.game.height)
               context.drawImage(this.forest, 0, 0, this.game.bw, this.game.bh)
               context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
               

           if(screen === 4){  
            console.log(screen)  
            console.log(spawned)
    context.drawImage(this.bug, 0, 280, 450, 560, this.game.width - 800, this.y, 700, 700)
    
    context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, this.game.height - 200  - 150, 280, 280)

}

            context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, this.game.height - 200  - 150, 280, 280)
        }
        if(e.xPosition - this.x > 0){
                document.getElementById("dia").style.display = "flex"
document.getElementById("log").style.display = "block"
document.getElementById('log').textContent = enemyLines[ei].toString()
document.getElementById('char').textContent = "Entity"
            e.xPosition = e.xPosition - enemySpeed
            context.clearRect(0, 0, this.game.width, this.game.height)
               context.drawImage(this.forest, 0, 0, this.game.bw, this.game.bh)
               context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
           if(screen === 4){    
    context.drawImage(this.bug, 0, 280, 450, 560, this.game.width - 800, this.y, 700, 700)

            context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, this.game.height - 200  - 150, 280, 280)
}
            context.drawImage(this.enemies, e.x, e.y, this.width, this.height, e.xPosition, this.game.height - 200  - 150, 280, 280)
        }

        console.log(screen)
        
     })
}

dialouge(character){
let lines = ""

lines = character.dialouge[0]
linesNeeded = lines.length

if(character.neededItem && items.includes(character.neededItem)){
console.log("she's not workin")
lines = character.dialouge[1]
           if (character.name === "Biffii"){
           items.push("Milk")
}
           if (character.name === "Steph"){
           items.push("Rocket")
}
           if (character.name === "Rosie"){
           items.push("Knife")
}
if (character.name === "Eli"){
    items.push("Rose")
}
linesNeeded = lines.length
         }
if(linesDone === linesNeeded){
if (character.name === "Rosie"){
    items.push("Rosie")
}
if (character.name === "Steph"){
    items.push("Steph")
    items.push("Stone")
}
if (character.name === "Stom"){
    items.push("Stom")
}




            linesNeeded = 0
            linesDone = 0
            lines = ""
            document.getElementById("dia").style.display = "none"
            return
        }
    document.getElementById("dia").style.display = "flex"
    document.getElementById("log").style.display = "block"
    document.getElementById('int').textContent = "Space to continue"


const person = lines[linesDone]
console.log(person)
console.log(lines)
let lineProp 
let name
  if(character.name === "Ella"){

     linesNeeded = 1
if(linesDone === linesNeeded){
    console.log("hit it")
            document.getElementById("dia").style.display = "none"
            linesDone = 0
            linesNeeded = 0
            return
        }
    
    console.log( lines[linesDone].toString())
    linesDone = 0
    const need = lines[linesDone].toString()
     document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = character.name
    document.getElementById("log").textContent = need
shrinkFac = shrinkFac/2
if(shrinkFac === .5){
    document.getElementById("h2").style.display = "none"
}

    linesDone++

      return
        
  }
    if(character.name === "Steph Friends"){

     linesNeeded = 1
if(linesDone === linesNeeded){
    console.log("hit it")
            document.getElementById("dia").style.display = "none"
            linesDone = 0
            linesNeeded = 0
            return
        }
    
    console.log( lines[linesDone].toString())
    linesDone = 0
    const need = lines[linesDone].toString()
     document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = character.name
    document.getElementById("log").textContent = need
shrinkFac = shrinkFac/2
    linesDone++

      return
        
  }
      if(character.name === "Gon"){

     linesNeeded = 1
if(linesDone === linesNeeded){
    console.log("hit it")
            document.getElementById("dia").style.display = "none"
            linesDone = 0
            linesNeeded = 0
            return
        }
    shrinkFac = shrinkFac/2
    console.log( lines[linesDone].toString())
    linesDone = 0
    const need = lines[linesDone].toString()
     document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = character.name
    document.getElementById("log").textContent = need

    linesDone++

      return
        
  }
      if(character.name === "Eli" && !items.includes("Rosie")){

     linesNeeded = 1
if(linesDone === linesNeeded){
    console.log("hit it")
            document.getElementById("dia").style.display = "none"
            linesDone = 0
            linesNeeded = 0
            return
        }
    shrinkFac = shrinkFac/2
    console.log( lines[linesDone].toString())
    linesDone = 0
    const need = lines[linesDone].toString()
     document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = character.name
    document.getElementById("log").textContent = lines[linesDone].n

    linesDone++

      return
        

  }








    


if (person.p){
 name = "You"
 lineProp = "p"
}
else{
    name = character.name
    lineProp = "n"
    console.log(lines)
    }
    

document.getElementById('log').textContent = lines[linesDone][lineProp]
document.getElementById('char').textContent = name
      
 linesDone++ 
}

drawBug(context){
   if (bugHealth === 0){
        const keyz = this.game.input.keys
            if(keyz.includes("Space")){

                document.getElementById("dia").style.display = "none"
document.getElementById("log").style.display = "none"
                

            }
document.getElementById("dia").style.display = "flex"
document.getElementById("log").style.display = "block"
document.getElementById('log').textContent = "My goo!"
document.getElementById('char').textContent = "You"
context.drawImage(this.goo, 0, 0, this.width, this.height, this.game.width - 300, this.y, 600, 600)
return

    }
    if(bugState === 0)
    {context.drawImage(this.bug, 0, 0, this.width, this.height - 450, this.game.width - 800, this.y, 450, 560)
        bugState++
    }

else{
    setTimeout( ()=>
    {context.drawImage(this.bug, 0, 280, this.width, this.height-450, this.game.width - 800, this.y, 450, 560
    )
     spawned.push(    {   type: "super-spore",
        points: 6,
        xPosition: this.game.width - 600, 
        yPosition: 300, 
        x: 320, 
        y: 0
    })
    enemySpeed =  Math.random() * 10 + 90
     bugState = 0}, 1000)
     
}
}

interact(context){
if (screen === 1){
for(let i = 0; i < 4; i++){
    const bacterium = bacteria[i]
    if(Math.abs(bacterium.xPosition - this.x) < 150){
    this.char = bacterium
       document.getElementById("int").style.display = "block"
document.getElementById('int').textContent = "Interact with " + bacterium.name + "(e)"
}

}
}
if (screen === 2){
for(let i = 4; i < 9; i++){
    const bacterium = bacteria[i]
    if(Math.abs(bacterium.xPosition - this.x) < 150){
         this.char = bacterium
          document.getElementById("int").style.display = "block"
document.getElementById('int').textContent = "Interact with " + bacterium.name + "(e)"
                console.log("Interact with " + bacterium.name)
}
}
        }
       
        }

update(keyArray, context){


    if(bugHealth === 0){
        over = true
        return
    }
if(over){
       screen = 1
 totalSpawned = 0
 spawned.splice(0, spawned.length)
 weapons.splice(0, weapons.length)
 shrinkFac = 1
 this.x = 0
     document.getElementById("dead").style.display = "none";
  document.getElementById("int").style.display = "none";
  document.getElementById("health").style.display = "none";
    items.splice(0, items.length)
    
}

                  if(this.x < 0){
                this.x = this.game.width - 320
                screen--}
            if(this.x > this.game.width){
                this.x = 0
                screen++
if(screen === 4){
    totalSpawned === 0
    document.getElementById("bar").style.display = "block"
    spawned.splice(0, spawned.length)
    spawned = []
     weapons.splice(0, weapons.length)
    
}
            if(screen === 5){
                this.x = this.x
            }}
                
console.log(screen) 
console.log(spawned)
if(shrinkFac === 0.125){
  document.getElementById("canvas1").style.display = "none"
    if(screen === 3 || screen === 4)
{ spawned.splice(0, spawned.length)
 weapons.splice(0, weapons.length)
 totalSpawned = 0
 document.getElementById("dead").style.display = "flex";
  document.getElementById("log").style.display = "none";
  document.getElementById("health").style.display = "none";
 screen = 3
 spawned.splice(0, spawned.length)
 weapons.splice(0, weapons.length)
 shrinkFac = 1
 this.x = 0}
 else{
    screen = 1
     document.getElementById("dead").style.display = "flex";
  document.getElementById("int").style.display = "none";
  document.getElementById("health").style.display = "none";
    items.splice(0, items.length)
 }
}

if(keyArray){  this.keyArray = keyArray};
     
            this.interact(context)
            context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)

            if(screen === 1 || screen === 2){
            this.drawBac(context)
            }
            if(screen === 3){
            this.spawnEnemies(context)
            this.drawEnemies(context)
             this.trackPosition(context)
         
           

            }
                if(screen === 4){
                                
this.spawnEnemies(context)
this.drawEnemies(context)
            
             this.trackPosition(context)
             
}
       
                   if(this.keyArray.includes('ArrowRight')){
                if (keyArray.length > 1)
                {
                    context.clearRect(0, 0, this.game.width, this.game.height)
                    this.drawM(context)
                    this.x = this.x + 60
                   
                }
                else
                {this.drawM(context)
                this.x = this.x + 60}
        }

            if(this.keyArray.includes('ArrowLeft')){
            if (keyArray.length > 1){
            context.clearRect(0, 0, this.game.width, this.game.height)
            this.drawM(context)
            this.x = this.x - 60
            console.log("went up")
          
            }
            else
            {this.drawM(context)
              this.x = this.x - 60}
            }
             
                   

            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowRight'))
                {
                      this.x = (this.x + 40) * this.sprint
                this.drawM(context)}

            if(this.keyArray.includes('Enter') && this.keyArray.includes('ArrowLeft'))
                { this.x = (this.x - 40) * this.sprint
                    this.drawM(context)
                }
if(this.keyArray.includes("KeyE")){
        console.log("It was our fault!!")
        
            this.interact(context)
                    this.dialouge(this.char)
            
       }
                if(this.keyArray.includes('KeyR')){
                          console.log("shot")
                
                this.shoot('Rocket', context)
              
        }
                            if(this.keyArray.includes('KeyS')){
                                 console.log("shot")
                this.shoot('Stone', context)
        }
                            if(this.keyArray.includes('KeyD')){
                                 console.log("shot")
                this.shoot('Knife', context)
        }
        if(this.keyArray.includes("Space")){
       if(linesDone != 0){
            this.interact(context)
        this.dialouge(this.char)
             }
       
       
  
            

            
  
             

        }

              

        }

draw(context){ // this is for drawing the sprite!      
         context.drawImage(this.idle, 0, 0, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac)
        }
        
drawBac(context){
        context.clearRect(0, 0, this.game.width, this.game.height)
         context.drawImage(this.floor, 0, this.game.height - 1000, this.game.bw, 1000)
    if (screen === 1){
     for(let i = 0; i < 4; i++){
          context.drawImage(this.bacteria, bacteria[i].x, bacteria[i].y, this.width, this.height, bacteria[i].xPosition, this.y - bacteria[i].yPosition, 200, 200)
     }
     
    }
        if (screen === 2){
                     
     for(let i = 4; i < 9; i++){

          context.drawImage(this.bacteria, bacteria[i].x, bacteria[i].y, this.width, this.height, bacteria[i].xPosition, this.y - bacteria[i].yPosition, 200, 200)
     }
     
    }

}
        
        drawD(context){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 0, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac)  
        }
        
        drawM(context){ // this is for drawing the sprite!      
         if(inc === 0){
            this.x = this.x +20
           context.drawImage(this.idle, 0, 320, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac)
           console.log("sprite 1")

        } 
        if(inc === 1){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 320, 320, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac) 
           console.log("sprite 2")
           inc++ 
        return "stop"
        }
        if(inc === 2){ // this is for drawing the sprite!        
         context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac)  
           console.log("sprite 3")
        }
        if(inc === 3){ // this is for drawing the sprite!        
     context.drawImage(this.idle, 0, 640, this.width, this.height, this.x, this.game.height - this.height *  shrinkFac - 150, this.width *  shrinkFac, this.height *  shrinkFac)
         console.log("sprite 4")
         inc = 0
         inc++
         return "stop"
        }
       inc++
    }
}