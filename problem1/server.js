const express = require('express');
const Mathroutes = require('./routes/mathRoutes') 
//require('dotenv').config();

const app = express();
const PORT =9876;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use("/numbers",Mathroutes)


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:9876`);
});