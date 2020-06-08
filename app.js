const express = require('express')
const app = express()
const port = 3000
var path = require('path');
var helmet = require('helmet');
app.use(helmet());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// only route
app.get('/', (req, res) => res.render('landing'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))