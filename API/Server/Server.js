/**
 * Imports
 */
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var Config = require('../Config/Config');
var schema = require('../schema/schema');
var cors = require('cors');

/**
 *  Init
 */
let init  = function (){
    const app = express();

    //Allow cross-origin
    app.use(cors());

    app.use('/graphql',graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(Config.ServerConfig.PORT,()=>{
        console.log('Server running on port:',Config.ServerConfig.PORT)
    })
}



/**
 *  exports
 */
module.exports = {
    init: init
}