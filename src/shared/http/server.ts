import 'reflect-metadata';
import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate'
import routes from './routes/index'
import AppError from '../errors/AppError';
import { pagination } from 'typeorm-pagination'
import '../typeorm';

const port = 3334;
const app = express();

app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(routes);

app.use(errors());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
})
// app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
//   if (error == null) {
//     return response.status(error).json({
//       status: 'error',
//       message: error,
//     });
//   }
//   return response.status(500).json({
//     status: 'error',
//     message: 'internal server error'
//   })
// })
app.listen(port, () => {
  console.log(`server started ${port}`)
});