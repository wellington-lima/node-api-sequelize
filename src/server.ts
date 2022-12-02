import express from 'express';
import routes from './routes';
import db from './db';

const app = express();

app.use(express.json());
app.use(routes);

db.sync({});

app.listen(3333, () => console.log('Server started on port 3333'));