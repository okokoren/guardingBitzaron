import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
