import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import cors from 'cors';

import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing reuqest body which we expect as a json
app.use(express.json());

// Middleware for handling CORS policy
// Option 1 - allow all incoming Origins with Default of cors(*):
app.use(cors());
// Option 2 - allow custom Origins only:
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get("/", (req, res) => {
    console.log(req)
    return res.status(200).send('Welcome home')
});

app.use("/books", booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})
.catch((err) => {console.log(err)})