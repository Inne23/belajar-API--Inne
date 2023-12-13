const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let datauser = [{
    "nama" : "inne",
    "id": 23,
    "umur" : 20,
    "nim" : 210180075,
}

]
app.get("/api-user", function (req, res) {

    res.json({
        message: "succes data berhasil",
        data :  datauser,
    
    })
    
})
app.post("/api-user", function (req , res) {
    const { nama, id, umur, nim} = req.body

    datauser.push({
        
        "nama": nama,
        "id": id,
        "umur": umur,
        "nim" : nim

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
})

app.put("/api-user", function (req, res) {
    const { id, nama, umur } = req.body;

    const dataBaru = {
        "id": id,
        "nama": nama,
        "umur": umur,
    }
    for (let index = 0; index < DataUser.length; index++) {
        if (id == DataUser[index].id) {
            DataUser.splice(index, 1, dataBaru)
        }
    }
    res.json({
        message: "data berhasil di ubah"
    });
})

app.delete("/api-user", function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < datauser.length; index++) {
        if (id == datauser[index].id) {
            datauser.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
})
app.listen(port, function () {
    console.log("server berjalan")
})