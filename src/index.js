const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');


const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
<<<<<<< HEAD
app.engine('handlebars', handlebars({ /* options */ }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\views'));
=======
app.engine('hbs', handlebars({
  extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//console.log('PATH:  ',path.join(__dirname, 'resources\\views'));
>>>>>>> 2363cf16844d096b736954268f15800f3561b299

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news-page', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
