const express = require('express');
const bodyParser = require('body-parser');
//const apiRouter = require('./routes/api');
//const webRouter = require('./routes/web');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Gerardo'});
});

//app.use('/api', apiRouter);
//app.use('/web', webRouter);


app.listen(3000, () => {
    console.log('Servidor arrancado!')
});