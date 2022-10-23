const express = require("express")
const app = express()
const cors = require("cors")


const coronaRouter = require("./routes/coronaRouter")
const memberRouter = require("./routes/memberRouter")
const coronaWithMemberRouter=require("./routes/coronaWithMemberRouter")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}));


require("./configs/database")


app.use("/corona", coronaRouter)
app.use("/members", memberRouter)
app.use("/member", coronaWithMemberRouter )



app.listen(8000, () => {
   console.log("Listen to port 8000")
})