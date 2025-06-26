import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

import todoRoutes from './routes/todo.routes.js';

const app = express();
app.use(express.json());
app.use(cors()); // CORS must be before routes

app.use('/todos', todoRoutes);

// app.get('/', (req, res, next) => {
//     res.send('hello world')
// })

export default app;