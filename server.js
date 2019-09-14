const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static("public"));
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api', function(req, res){
    const userName = req.query.username;
    const userId =  req.query.id;
    const message = req.query.message;

    const reply = `${userName} with an ID of ${userId} is saying ${message}`;
    console.log(userName);
    res.send(reply);
})

app.get('/showprofile/:username', function(req,res){
    const user = req.params.username;
    console.log(user);

    res.send("profile route working")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


console.log("server running");