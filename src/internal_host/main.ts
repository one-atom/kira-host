import express, { Request, Response } from 'express';
import * as path from 'path';
import cors from 'cors';

const PORT = 8080;
const PUBLIC = path.join(__dirname, 'public');

const app = express();

app.use(cors());

app.use(express.static(`${PUBLIC}`));
app.use('/scripts', express.static(`${PUBLIC}`));

app.get('/api', (_: Request, res: Response): void => {
  res.send('not yet implemented ...');
});

app.get('*', (_: Request, res: Response): void => {
  res.sendFile(`${PUBLIC}/index.html`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
