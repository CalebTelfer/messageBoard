const express = require('express');
const app = express();
const PORT = 8080;
const path = require('node:path');


//ejs config
app.set('VIEWS', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//routes
const indexRouter = require("./routes/indexRouter");
app.use('/', indexRouter);







//start server
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on port ${PORT}`);
})
