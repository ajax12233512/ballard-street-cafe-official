import { ballard } from './placesApi/api.js';
import 'dotenv/config'; //Dotenv will only work in this folder. Intialize in other folders to use env variable
import express from 'express'
const app = express();

ballard();

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});