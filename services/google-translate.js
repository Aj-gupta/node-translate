import translate from '@vitalets/google-translate-api'

/*
  Google translate service
 */
const googleTranslate = async({text, slang, tlang})=>{
   
    const result = await translate(text,{
        from:slang,
        to:tlang
    })
    return result;
}

export default googleTranslate;