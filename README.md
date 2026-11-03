# study-track
 <br>
 <br>
 Aaaaa I just realized that my description on Terra is so misleading. I started it and never finished it. If you're a reviewer and you're here, tysm for taking a look! 
 <h2>For Reviewers</h2>
 So, the project does include something I made for jame game, BUT jame game was only running during the first week of Terra. This project is for the second week, so all of the hours for it were logged after jame game ended. A good chunk of the hours for week 2 are hours I spent refining what I made for it because the game was super buggy (and still uhh kinda is), and trying ways to integrate it into my study platform. So, if you're sitting wondering how on earth I spent 20 hours on this, just know it's because altering and debugging a 2D game loop built messily without a game engine was incredibly hard for me (especally for my first time), and I was trying make the game that you earn the right to play by studying somewhat enjoyable to play. I will make it better in the future, now that I'm sort of okay with the game. Pinky promise.
<br>
<br>
 <h2>How does it work?</h2>
Like I said, I didn't have enough time to make this nearly all of the things that I wanted it to be, as I scoped terribly. Originally, I wanted the coins to be used to upgrade weapons to use in the game, but the concept I was going for remains the same. <b><i>You study? You get rewarded.</i></b>
<br>
<br>
Right now, there's only the feature of unlocking the game after you get a whopping coin amount of 20,000. You cannot add study resources (yet), as I wanted the user to be able to attach icons to each resource but wasn't entirely sure how to do that yet. 
So, to use this tool, you click on a subject card and type in the amount of time that you spent studying. You can also add notes. For instance, if you were studying for the ACT or some other standardized test, you could write in the notes section what you missed and how. Plus, as long as you don't clear your cookies on the site, you could come back to that explanation later! The site serves as a nice digital learning log. You can see your total number of coins on the dashboard.
<br>
<br>
<br>
<h3>How does the coin system work?</h3>
- - If you log a session that's over 30 minutes, you get 20 coins for each extra minute.
- - Below 30 minutes, the rate is 1 coin per minute.
- - If you get 20,000 coins, you can play the game that I put my blood sweat and tears into. This is supposed to be a motivator to. Also, in-game, when a user fights enemies, they tell the user to go back and study. This *should* encourage users to study more.
<br>
<br>
<br>
 <h2>How'd you make it?</h2>
 <h3>The Reward Game</h3>
  - The game is made with html canvas and JS modules. Some things I fixed this week were the enemy spawning logic, among other things with the enemies. A bit more about the structure of the game itself:
   <br>
<br>
<blockquote>All of the game visuals were displayed by HTML canvas with the assistance of the requestAnimationframe function, clearRect function, and drawImage function. The requestAnimationframe function calls your clearRect and drawImage function if you provide them within the function parameter of the requestAnimationframe function. This way, the game draws the images smoothly in real time rather than being slow and not immediately reactant to the controls.
 <br>
<br>
I had to use clearRect() to clear the whole canvas before I drew something--like the player or an enemy. Otherwise, the player image would double because you never cleared it.
<br>
<br>
I used the drawimage function to draw the sprites and enemies.
<br>
<br>
JS Modules
- Game.mjs is responsible for the creation of the game and is linked to index.html directly. You'll find the requestanimationframe function here. This file basically connects all of the JS modules together.
- Player.mjs deals with basically everything--like player and enemy movement, dialogue, player inventory, player health, etc.
- State.mjs deals with if the player is idle or moving.If its idle, then the drawImage function in Player.mjs will alternate between the idle images in the player's sprite sheet. If the player is moving, it will signal for the draw functions to draw the moving sprites.
- Input.mjs is what detects the keys that a player is using and pushes them to an array that the other modules can use.
</blockquote>


<br>
<br>
 <h3>The Study Dashboard</h3>
The program uses localStorage to store your study data, so if you clear your cookies, you'll lose your data. Right now, there's only a set number of classes and a fixed type of class, but in a future iteration, I would like to add weapon upgrades with coins after 20,000 and of course improve the game. Most of the hours that went into this went into game optimization, as the game is made without an engine and in pure vanilla JS. By using JS rather than an engine, I can somewhat easily transfer data between the study dashboard and the game, as all the files access the same localStorage object. In future versions, I would like to use this localStorage method to allow for much more interaction between the game and the study dashboard. SO for now, the study dashboard is sort of like a banck, and the game is a much desired product that you buy with the money it the bank. I think that's a good analogy!
<br>
<br>
 <h2>What did you learn?</h2>
 Believe it or not, this is my first time actually using localStorage in a project! I usually just defer to databases (or JSON, depending on where I'm hosting) so I had to figure out how that worked and when to use it. localStorage requires everything to be a string, so I had to convert strings to numbers and JSON stringify the data. The data structure has the class name as the key, then the value of that key is an array of sessions. When you input a session, it is pushed to the array, which is stringified again and set again. Before I did this project, I didn't know it was called stringify because it was made a string! I only knew stringifying was the way you make an object into JSON. Well noted on my part.
<br>
<br>
  <h2>What's next?</h2>
  Everything? There's so much more I want to add to this project, as I mentioned above! When I come back to this project, I'll likely start with being able to add your own classes and making classes spawn as characters in the game :)
