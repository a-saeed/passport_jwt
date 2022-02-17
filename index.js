/* ------------- ********************************************** ------------- */

import express from 'express'
import passport from 'passport'
import './config/database.js'
import './config/passport.js'
import 'dotenv/config'
/* ------------------------------ import routes ----------------------------- */
import userRouter from './routes/userRoutes.js';

/* ------------- ********************************************** ------------- */
const app = express();
const port = process.env.PORT

/* ------------------------------- parsing middleware ------------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* --------------------------- initialize passport -------------------------- */
app.use(passport.initialize())

/* ---------------------------- routes--------------------------- */
app.use('/user', userRouter)

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});