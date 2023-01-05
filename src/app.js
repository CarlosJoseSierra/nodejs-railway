import express from 'express'
import { PORT } from './config.js'
const app = express()

app.get('/', (req, res)=>{
    res.send('Welcome to server')
})

app.get('/ping', (req, res)=>{
    res.send('Welcome to server Carlos')
})
app.listen(PORT);
console.log('Server on port ', PORT);