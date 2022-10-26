const ejs = require('ejs');
const express = require('express');

const app = express();
const PORT = 80;

let info = [{ name: "mack miller", date: "today", species: "human"}];
app.get('/', (req, res) => {
    let template = ejs.renderFile('./template.ejs', {info: info }, function(err, str) {
        if(err) throw err;
        res.send(str);
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})
