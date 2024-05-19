const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req, res)=> {
    res.send(`api key ${process.env.API_KEY}, DB_PASSWORD:${process.env.DB_PASSWORD}`)
})

app.listen(port, ()=> {
    console.log(`server listening on port http://localhost:${port}`)
})