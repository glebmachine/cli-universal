import 'reflect-metadata';
import 'rxjs/Rx';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { Request, Response } from 'express';

import { AppServerModule } from './app/app.server.module';

const ROUTES = [
  '/',
  '/lazy'
];

enableProdMode();
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist/browser', {index: false}));

ROUTES.forEach((route: string) => {
  app.get(route, (req: Request, res: Response) => {
    // console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/browser/index', {
      req: req,
      res: res
    });
    // console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
