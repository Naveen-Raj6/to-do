import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('hello world')
})

export default app;