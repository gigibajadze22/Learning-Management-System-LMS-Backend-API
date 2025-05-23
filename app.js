import express from 'express';
import swaggerUi from 'swagger-ui-express';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import courseRouter from './routes/courseRoute.js';
import submissionRouter from './routes/submissionRouter.js';
import fileRouter from './routes/fileRoute.js';
import { handleError } from './utils/errorHandler.js';
import specs from './middlewares/swagger.js';


const app = express();

app.use(express.json())

app.use('/uploads', express.static('uploads'));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/courses',courseRouter)
app.use('/api/assigments',submissionRouter)
app.use('/api/files',fileRouter)

app.use(handleError);
export default app;