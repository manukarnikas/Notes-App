/**
 * Imports
 */
var db = require('./Db/db');
var server = require('./Server/Server')



/**Initialize */
let init  = async function(){
    /**Init Db */
    await db.init()
    .then(()=>{
        /**Init Server */
        server.init();
    }).catch((err)=>{
        console.log(err);
    });
}


/**
 *  Init
 */
init();


