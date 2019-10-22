import mysql from 'mysql'
import config from './config/mysqlConfig'

class database {
    constructor(){
        this.connection = mysql.createConnection(config);

        this.connection.connect((err) => {
            if (err){
                console.error(" Connection error : " + err.stack);
                throw err;
            }

            console.log( "Connected to database with threadId : " + this.connection.threadId);
        })
    }

    query(statement, array = [], cb){
        this.connection.query(mysql.format(statement, array), (err, res, fields) => {
            if (err) throw err;
            cb(res, fields);
        })
    }
}

export default database;
