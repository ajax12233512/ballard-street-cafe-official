import { ballard } from './placesApi/api.js';
import 'dotenv/config'; //Dotenv will only work in this folder. Intialize in other folders to use env variable
import express, { json, response } from 'express'
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/api', async (req, res) => {
    try{
        const clientResponse = await ballard();
        // console.log('client response', clientResponse)
        res.send(clientResponse)
    } catch(e){
        console.log(e)
    }
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});