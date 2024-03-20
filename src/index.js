import dotenv from "dotenv"
import express from "express"
import db_conn from './db/index.js'

const app = express()
db_conn()
dotenv.config()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//         app.on("error", () => {
//             console.error("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()