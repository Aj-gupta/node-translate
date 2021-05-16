/*
  It is our translate router.
 */
import express from 'express'
const router = express.Router()
import translate from '../controllers/translate.js'

router.post('/',translate)
export default router;
