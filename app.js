import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/api/users')
app.use('/api/auth')
app.use('api/courses')
app.use('/api/assignments')
app.use('/api/files')



export default app;