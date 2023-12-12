const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get("/get-user", function (req, res) {
    res.json({
        message: "succes get data",
        username: "inne",
        email: "inne@gmail.com",
        password: 232323,
    })

})
app.post("/link", function (req, res) {
    const{umur, hobi} = req.body;

    res.json({
        message: "success post data",
        umur: umur,
        hobi: hobi
    })
})
app.put("/link", function (req, res) {
    const{umur, hobi}= req.body;
    res.json({
        message: "success put data",
        umur: umur,
        hobi: hobi
    })
})
app.delete("/link", function (req, res) {

    res.json({
        message: "success delete data",
    })
})



app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`)
})