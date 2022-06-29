import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(routes)

//yarn tsc diretorio.ts -> Converte o arquivo .ts em .js

app.listen(3333);