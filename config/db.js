
/*
  File for creating database connection.
 */
import mysql from 'mysql'
import { promisify } from 'util'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.DB_USER,
  password:process.env.PASSWORD,
  database:process.env.DB,
})


connection.connect((err)=>{
  if(err){
    console.error(`Error while connecting database:${err.message}`)
    process.exit(1)
  }
  console.log("Database Connected.")
})

const query = ( sql, args ) =>{
  return promisify( connection.query )
    .call( connection, sql, args );
}
const close = ()=>{
  return promisify( connection.end ).call( connection );
}


export {connection, query, close};