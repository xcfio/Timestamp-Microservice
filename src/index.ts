import express from "express"
import cors from "cors"
import router from "./router"

const app = express()

app.use(cors())
app.use(router())

app.listen(7200, () => console.log("Server is running"))
