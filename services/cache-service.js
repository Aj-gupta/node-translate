/*
  This is our cache service.
 */
import {connection, query } from '../config/db.js'


/*
  Inserting data to database.
 */
const insertInCache = ({ sourceText,transText, slang, tlang})=>{
    const sql = "INSERT INTO translate(source, target, slang, tlang) values(?, ?, ?, ?)"
    const infield = [ sourceText, transText, slang, tlang];
    connection.query(sql,infield,(err, result, args)=>{
        if(err){
           console.error(err);
        }
        else{
            console.log("Inserted.");
        }
    })
   
}

/*
  Checking data in database
 */
const checkInCache= async({text, slang, tlang})=>{
    const data =await query(`SELECT target FROM translate where source= ? and slang= ? and tlang= ?`,[text,slang,tlang])
    return data;
}

export { checkInCache, insertInCache }