const express = require('express');
const app = express();
const PORT = 8080;
const path = require('node:path');


//ejs config
app.set('VIEWS', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) => res.send("test"));







//start server
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on port ${PORT}`);
})
