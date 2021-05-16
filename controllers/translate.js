import asyncHandler from 'express-async-handler';
import googleTranslate from '../services/google-translate.js'
import  getCode  from '../services/language.js'

import { checkInCache, insertInCache } from '../services/cache-service.js'
/*
  Translate controller for translate Router.
 */
const translate =asyncHandler(async (req, res)=>{
    let { text, slang, tlang } = req.body
     slang = getCode(slang) // getting code for source
     tlang = getCode(tlang) // and target language from language.js file
    if(!slang || !tlang){
        throw new Error('Please specify correct source or target language.')
    }
    if(!text){
         throw new Error('Please enter a text.') 
    }
     text = text.replace(/\s\s+/g, ' ').trim()  // removing extra spaces from text
    
    const translateObj= {
        text:text,
        slang:slang,
        tlang:tlang
    }

    // console.log(translateObj);
    const cache= await checkInCache(translateObj);  // checking text if it's already in databse
    // console.log(cache);
    if(cache.length === 0){
        const result = await googleTranslate(translateObj)  // translating text
        // console.log(result);
        const resultObj = {
            sourceText:translateObj.text,
            transText:result.text,
            slang:translateObj.slang,
            tlang:translateObj.tlang
        }
        // console.log(resultObj);
        res.json({"translatedText":resultObj.transText})  // response
        try{
            insertInCache(resultObj)  // inserting into database
        }
        catch(err){
            console.error(err);
            return
        }
        return
    }
    res.json({translatedText:cache[0].target}); // response from cached translation
})


export default translate;