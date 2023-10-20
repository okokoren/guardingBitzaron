import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import volenteersRouter from './routers/volenteers.router.js';
import shiftsRouter from './routers/shifts.router.js';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/volenteers', volenteersRouter);
app.use('/shifts', shiftsRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
