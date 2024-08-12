import express, { Request, Response, Application } from 'express';
import indexRouter from './routes/index';

const PORT = process.env.PORT || 8000;
const app:Application = express();

app.use(express.json());



app.use('/', indexRouter);


app.listen(PORT);