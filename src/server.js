const express = require("express");
const router = require("./router");
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/", router)

app.listen(3000, () => {
    console.log('listening port 3000');
})
