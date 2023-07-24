const express = require('express')
const cors = require('cors');
const axios = require('axios')
const app = express()

app.use(
	cors(),
    express.json()
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(
	`Server started on port ${PORT}`));

app.get('/',async (req,res)=>{
        res.send('ok')
})

app.post('/ninth',async (req,res)=>{
    const br = req.body.br
    const id = req.body.id
    const gove = req.body.gove

    try {
        const data = await fetchApiNinth(br,id,gove)
        res.json({status:"success",message:data})
    } catch (error) {
        res.json({status:"error",message:null})
    }

})

app.post('/bac',async (req,res)=>{
    const br = req.body.br
    const dt = req.body.dt
    const id = req.body.id
    const gove = req.body.gove
    
    console.log(br,id,gove,dt)
    try {
        const data = await fetchApiBac(br,dt,id,gove)
        res.json({status:"success",message:data})
    } catch (error) {
        res.json({status:"error",message:null})
    }

})

const fetchApiNinth = async (br,id,gove)=>{
    try {
    const options = {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "ylissuenn" : "myyl_AGyl4NN",
            "host" : "moed.gov.sy",
            "User-Agent" : "Dart/2.13 (dart:io)"
        }
    }

        const response = await fetch(`http://moed.gov.sy/api_2021/elm9_2022/ninth.php?br=${br}&id=${id}&gove=${gove}`,options)
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return null
    }

}

const fetchApiBac = async (br,dt,id,gove)=>{
    try {
    const options = {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
            "ylissue" : "myyl_AGyl4",
            "host" : "moed.gov.sy",
            "User-Agent" : "Dart/2.13 (dart:io)"
        }
    }

        const response = await fetch(`http://moed.gov.sy/api_2021/sec_2022/12th.php?dt=${dt}&br=${br}&id=${id}&gove=${gove}`,options)
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return null
    }

}