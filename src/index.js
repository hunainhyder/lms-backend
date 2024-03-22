import dotenv from "dotenv"
import db_conn from './db/index.js'

dotenv.config()
db_conn() 
.then(() => {
    app.on("error", () => {
        console.error("ERROR: ", error)
        throw error
    })

    app.listen(process.env.PORT, ()=> {
        console.log(`Server is listening on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed ${err}`)
})