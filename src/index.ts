import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`listening on port ${port}`));
