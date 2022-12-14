import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.listen(port, () => console.log(`listening on port ${port}`));
