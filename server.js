import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'


import { notFound, errorHandler} from './middleware/errorHandler.js'
import translateRouter from './routes/translate.js'

dotenv.config()


const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/translate',translateRouter);
  
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000



const server = app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
 )

server.on('close',async()=>{
  console.log("Stopping Server....");
})


// listen for TERM signal .e.g. kill
process.on ('SIGTERM', ()=>{
  server.close();
});

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', ()=>{
  server.close()
}); 

export default server;