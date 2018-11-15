
//1: Require Express
const express = require('express');


//2: Create the App Server
const app = express();

//3 Create the public static with app.use
app.use(express.static('public'));

//3*
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


//4 Create the routes with app.get

app.get('/', (request, response, next)=>{
    response.render('home-html')
});

app.get('/about', (request, response, next)=>{
    response.render('about-page')
});


//4* In this route, we stored a variable (data), that is an object, and we passed it as a second argument in the res.render result. In this case, wherever we use {{name}} in the gallery page, 'Ironhacker' will appear, because we called it. In res.render we always have to put the name of the file, not the URL (you will only use this when calling them from A tags or similars.)

app.get('/gallery', (req, res, next) => {
    let data = {
      name: "Ironhacker",
      bootcamp: "IronHack WebDev"
    };
    res.render('gallery-page', data);
});











//5 Create the listeners with app.listen

app.listen(3000, ()=>{
    console.log('The app is listening in localhost:3000')
});



//* To use the hbs files, this are the steps we have to follow:

//1. Install hbs in the terminal: 'npm install hbs'
//2. Put the app.set views on step 3 (marked with *)
//3. Change the 'response.sendFile' for 'response.render'