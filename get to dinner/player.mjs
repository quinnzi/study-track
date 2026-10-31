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
const enemyLines = [
    ["Why try to go back? Your parents don't want you there"],
    ["You were always the disappointment of the family. They just invited you out of politeness"],
    ["How did moving out go for you? Do you enjoy being a nobody, in a small house, surrounded by other nobodies?"],
    ["I wonder how you could matter, when no one on this dirt rock has ever loved you."],
     ["You'll die and no one will remember you"],
      ["Stay here, on the level of dust and germs now, right where you belong"],
       ["You know what will happen if you go to that dinner."],
        ["Killing me won't do anything but make you a worse person, then the sack of lazy flesh that you are."],
          ["I want to see you dead and atom-sized so I can plow over you and lay your tiny corpse on your mothers skin. Just like you humans do whenever you take a step."],
           ["Why do you even want to go out there? What's waiting on you, save for the emptiness"],
           ["'I wanna be a nurse when I grow up!' Couldn't hack it, could you?"],
           ["Be honest with yourself, you don't have a life to lose." ]
]

const parentLines = [
 {m:"Oh, Angel! You made it! Late as always, everyone"},
  {m:"I was worried you'd be hungry, but looks like you're...well fed."},
                 {d:"What took you so long?"},
                  {d:"And why is your hair that heinous color?"},
                {m:"Oh, be nice, Saran. But he's right. That color does not suit you."},
                {m:"Nor does that haircut if we're being frank."},
                  {m:"You, know, if you just visited us more often, be could stop you from embarassing yourself like this."},
                    {d:"The girl doesn't visit because she doesn't love us."},
                     {m:"Saran!"},
                      {d:"Just being frank. I mean, when was the last time you got a call from her?"},
                       {m:"Hmm, yes, not even a letter."},
                       {m:"I assumed she had had found a boyfriend...but I suppose not"},
                        {m:"Angel. when are you---"},
                        {m:"..."},
                        {m:"...Angel?"},
                        {m:"..."},
                        {m:"Where did she go?"}
                        
] 
const items = []
     let board
     const bacteria = [
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
    },
    {name: "Ella", 
        xPosition: 700, 
        yPosition: 70, 
        x: 0, 
        y: 640, 
        dialouge:[
            ["Have you considered dying your hair? That shade really washes you out..."],
           [ "Your mother was right. Seriously. Hair like that with skin like yours?"],
            ["Ever try washing your hair?"],
           [ "You look like such a mess lately. I mean--- when's the last time you combed that hair?"],
            ["Homeless person hair."]]
        }

    ,
    {name: "Lace", xPosition: 1600, yPosition: 50, x: 0, y: 320,
        dialouge:[

            [{p: "Do you have any weapons?"},
            {n: "Mmm, nmmm, I dmmmt huuv a weapum."},
             {n: "Steph prob wood tho"}],
            [{p: "Can I have that milk?"},
                {n:"Milk? Mmm"},
           {n:"Nmmm"}]

        ],
             neededItem: "Steph"
    },
    {name: "Stom", xPosition: 320, yPosition: 10, x: 0, y: 0,
          dialouge:[
            [{n: "Oh hey there! I've never seen you before. Who are you?"},
            {p: "I'm Angel! I was trying to drive to my parent's place for dinner, but a magic star shrank me. Who are you?"},
            {n: "Just a Stoma that grew a bit too large."},
            {n:"They said i was getting to big for my britches... so they kicked me out :("},
            {n:"Say, you're looking to grow?"},
            {p: "Yeah, my parents will rip me to shreds if I'm late."},
            {n: "Well, the weird goo at the end of mushroom forest stretches you up. Though I wouldn't go there without a weapon"},
            {n:"I don't have one, but if you need any more info, feel free to ask me!"},
            {n:"Talk to some bacteria, see if they can help you. Though-- as a warning, not all of them are nice."}],
            [{n: "Back again? You can go to mushroom forest whenever you like. Just walk past Biffi."},
            {n:"Remember, mushroom ghosts take 5 damage to kill. Spores take 3, and the beast--well, no one's ever killed it before."},
            {n: "Also, like I said, BE CAREFUL WHO YOU TALK TOO. You're so tiny. If you shrink into yourself anymore, I fear it won't be long before you're crushed by an atom."}

            ]
        ],
        neededItem: "Stom"
    },

    {name: "Rosie", xPosition: 1100, yPosition: 10, x: 640, y: 320,
        dialouge:[
            [ {p: "Do you have any weapons?"},
                {n:"Funny way to start a conversation, love."},
                
            {n: "But yes. I do."},
            {p: "Great! Can I have one?"},
            {n: "Hasn't anyone in this world ever told you nothing comes for free?"},
            {p: ":("},
            {n: "Go talk to Eli and get him to tell you where he hid my *red* rose"}], // and after this last line of dialouge {Rosie: false} is pushed to missionsComplete and it enables the player to have a weapon later on 
            [{n: "The pond? Of course he did. Ugh. The insolent gut dwelling thing."},
            {n: "I suppose a promise is a promise. Here. It deals 3 damage."},
            {n:"**You obtained THROWING KNIFE!** (Deals 3 damage)"}
        ]
        ],
             neededItem: "Rose"
    },
    {name: "Gon", xPosition: 800, yPosition: 10, x: 0, y: 960,
         dialouge:[
    ["You're going to your parent's house in THAT?"], 
  [  "Your parents don't love you"],
   [ "You were always the disappointment"],
    ["Went and got yourself shrunk. How stupid"],
    ["I wonder how you could matter, when no one on this dirt rock has ever loved you."]]
    },
    {name: "Steph", xPosition: 420, yPosition: 10, x: 640, y: 960,
            dialouge:[
     [{p: "Do you have a weapon?"},            
    {n: "Weapons! Why of course I do! What do you need them for?"},
      {p: "I'm going to the forest of mushrooms to get goo that can make me tall again."}, 
    {n:"The forest of mushrooms? How thrilling! I'm gonna tell you what all is there now!"},
    {n:"There's ghosts that take 3 damage to kill. Spores take 2. The beast whose name shall not be spoken takes much much more."},
    {n:"Yup! Anyways what were we talking about?"},
      {p: "Weapons...?"}, 
    {n:"Weapons! Right. Weapons. I can only part with this one that deals 1 damage."},
      {p: "Seriously? One?"}, 
    {n:"Hey! I'm being generous! But I guess I could part with my rocket launcher if you did something for me..."},
    {n:"Get me a milk. I want a taste!"},
    {n:"**You obtained STONE!** (Deals 1 damage)"}
],
    [
        {n:"Nice! Here's your rocket launcher, friend ;)"
            
        },
         {n:"**You obtained ROCKET LAUNCHER!** (Deals 7 damage)"}
    ]
    ],
             neededItem: "Milk"
    },
    {name: "Steph Friends", xPosition: 120, yPosition: 10, x: 960, y: 960, 
          dialouge:[
  [  "Ew. Look at that face"], 
    ["Why are you even talking to us?"],
    ["Please go choke on a spore"],
    ["Seriously? I can't believe you're actually trying to talk to us."],
   [ "Why don't you take the hint and go bugger off, hm?"]]
    },

    {name: "Biffii", xPosition: 1650, yPosition: 10, x: 640, y: 640,
          dialouge:[
    [{n:"Oh. Weapon?"},
    {n:"No. Steph bought all of them from me."},
    {n:"All for only a penny"},
    {n:"Now I'm broke and all I have is this milk."}],
    [{n:"Milk? But my family needs it to survive the frost"},
    {n:"If you really need it-- here. Enjoy."},
    {n:"**You obtained MILK!**"}

]
   ],
    neededItem: "Steph"
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
        this.char = bacteria[0]
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
help(){
    if (bugHealth === 0){
    
    let talk = 0
    if(!over){
document.getElementById("gameOver").style.display = "flex"
document.getElementById("canvas1").style.display = "none"
document.getElementById("gameStart").style.display = "none"
    if(talk === parentLines.length - 1){return}
   let lineProp
   function HELP() {
        if(talk === parentLines.length - 1){
          document.getElementById("canvas1").style.display = 'none'
          over = true
          bugHealth = 45
          talk = 0
        
}
    console.log("whyyyyy")
   
     console.log(talk)
    let name 
 

    if (parentLines[talk].d){
 name = "Dad"
         document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = name
    document.getElementById("log").textContent = parentLines[talk].d
    talk++
}
else{
    name = "Mom"
           document.getElementById("dia").style.display = "flex"
    document.getElementById('char').textContent = name
    document.getElementById("log").textContent = parentLines[talk].m
    talk++
    }
console.log(parentLines[0].m)
    
   }


}
    return}
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