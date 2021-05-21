const express = require('express');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const loginRoutes=require('./routes/login');
const boardRoutes=require('./routes/board');
const stdRoutes=require('./routes/std');
const subRoutes=require('./routes/sub')
const contentRoutes=require('./routes/content')




const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

//User Routes

app.use('/register', userRoutes);
app.use('/set_user',userRoutes);
app.use('/update',userRoutes);
app.use('/view_user',userRoutes);

//Login Routes

app.use('/login',loginRoutes);

//Board Routes

app.use('/create_board',boardRoutes);
app.use('/delete_board',boardRoutes);
app.use('/update',boardRoutes);

//Std Routes

app.use('/create_standard',stdRoutes);
app.use('/delete_standard',stdRoutes);
app.use('/update',stdRoutes);
app.use('/view_std',stdRoutes);

//Subject Routes
app.use('/view_subject',subRoutes);
app.use('/create_subject',subRoutes);
app.use('/delete_subject',subRoutes);
app.use('/update',subRoutes);



//Content Routes
app.use('/delete_content',contentRoutes);
app.use('/create_content',contentRoutes);
app.use('/list_content',contentRoutes);
app.use('/search',contentRoutes);
app.use('/update',contentRoutes);







app.listen(ports, () => console.log(`Listening on port ${ports}`));
