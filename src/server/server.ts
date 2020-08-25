import * as path from 'path';
import * as express from 'express';
import * as passport from 'passport';
import * as cors from 'cors';


import './middleware/localstrategy';
import './middleware/bearerstrategy';

import routes from './routes';


const app = express();
let p = path.join(__dirname, '../public');

app.use(express.static(p));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
