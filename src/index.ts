import express from "express"
import cors from "cors"

const app = express().use(cors({ optionsSuccessStatus: 200 }))

app.get("/api/:date?", (req, res) => {
    const input = req.params.date
    if (!input) {
        const date = new Date()
        return res.json({ utc: date.toUTCString(), unix: date.getTime() })
    }

    const date = new Date(isNaN(Number(input)) ? input : Number(input))

    if (date.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" })
    } else {
        res.json({ utc: date.toUTCString(), unix: date.getTime() })
    }
})

app.listen(3000, () => console.log("Server is running"))
