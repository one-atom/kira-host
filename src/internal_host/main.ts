import express, { Request, Response } from 'express';
import * as path from 'path';
import cors from 'cors';

const PORT = 8080;
const STATIC = 'dist';

const app = express();

app.use(cors());

app.use(express.static(`${path.resolve('./')}/${STATIC}/www`));

app.get('/api', (_: Request, res: Response): void => {
  res.send('not yet implemented ...');
});

app.get('*', (_: Request, res: Response): void => {
  res.sendFile(`${path.resolve('./')}/${STATIC}/index.html`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
