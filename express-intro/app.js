
//this line means: go look in node_module folder and find another folder called express in that folder, there will a file that is doing a bunch of magic and then eporting a magic variable for you and you are equaling express to that variable. 
const express = require('express');


//this line creates a variable called app that is equal to whatever hapens when we run the file that we got from requiring express on line 3
const app = express();


//Se pone solo un slash cuando se entra por ejemplo a google.com si nada detras, es decir, cuando quieres indicar la pagina principal

app.get('/', (req, res, next) => {

    res.send(`
    
    '<h1>Welcome Ironhacker. :)</h1>'
    
    `);
});


app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname + '/views/home-page.html')
})







app.listen(3000, ()=> {
    console.log('My first app listening on port 3000!')
});
