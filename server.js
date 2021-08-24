const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  // Middleware to allow data returned to be useable

//after app has been defined, use methodOverride.  
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.use((req, res, next) => {    // Middleware [.use method] (must go before all other Routes)
    let logStr =   ` -- DATA: ${req.method} ${req.url}`;

    if(req.body) {   
        logStr += ` ${JSON.stringify(req.body)}`;
    }
    // console.log("I run for all routes");
    console.log(`${req.method} ${req.url}`);
    next();
});
// End Middleware

app.use('/users', require("./controllers/usersController.js"));
app.use('/givers', require("./controllers/giversController.js"));

app.listen(process.env.PORT, () => {
    console.log('I am listening');
});