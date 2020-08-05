/**imports */
const mongoose = require('mongoose');
const Config = require('../Config/Config');


/**Db init */
 let init = async function(){
    return new Promise((resolve,reject)=>{
        try{
            mongoose.connect(`mongodb://${Config.DbConfig.HOST}:${Config.DbConfig.PORT}/${Config.DbConfig.DATABASE}`, {
            useNewUrlParser: true});
            console.log('Db connected Successfully...');
            resolve();
        }
        catch(err){
            console.log('Db Failed to Connect!')
            reject(err)
        }
    });
}


/**exports */
module.exports =  {
    init: init
}