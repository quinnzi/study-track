import express from "express"

const app = express()


app.get("/", (req, res)=>{
	res.sendFile("/home/quinnz/feed-the-pit/game.html")
})
app.listen(3001, function(err){
    if (err) console.log(err)
    console.log("Server listening on Port", 3001);
})