import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {addToData} from "./db.js";

const app = express()
const port = 22222

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/addData', (request, response)=>{
    const payload = request.body;
    console.log("Got POST at /addData" + JSON.stringify(payload));
    addToData(payload)
        .then((res)=>{
            response.send(JSON.stringify(res))
        })
})

// Makes everything in the media folder available over http
app.use(express.static('media'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})