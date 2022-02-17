/* ----------------------------- S T A N D A R D ---------------------------- */

import mongoose from "mongoose";
import colors from 'colors'
import 'dotenv/config'


mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('> Connected...'.bgCyan))
    .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))
