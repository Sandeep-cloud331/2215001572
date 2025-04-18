const express = require('express');
//require('dotenv').config();

const app = express();
const PORT =3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:3000`);
});