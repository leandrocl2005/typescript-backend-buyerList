import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })) // parsing application/x-www-form-urlencoded

app.use(routes)

app.listen(3333);