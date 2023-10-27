import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import volenteersRouter from './routers/volenteers.router.js';
import shiftsRouter from './routers/shifts.router.js';

dotenv.config();

const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/volenteers', volenteersRouter);
app.use('/shifts', shiftsRouter);

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
