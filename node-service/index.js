const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// Path to the environment file
const envFilePath = '/etc/env/app.env';

try {
    const envFileContent = fs.readFileSync(envFilePath, 'utf-8')
    envFileContent.split('\n').forEach(line => {
        const [key, value] = line.split('=')
        if (key && value) {
            process.env[key.trim()] = value.trim()
        }
    })
}catch(e) {
    console.error('Failed to read env file:', err);
    process.exit(1);
}

app.get("/", (req, res)=> {
    res.send(`api key ${process.env.API_KEY}, DB_PASSWORD:${process.env.DB_PASSWORD}`)
})

app.listen(port, ()=> {
    console.log(`server listening on port http://localhost:${port}`)
})