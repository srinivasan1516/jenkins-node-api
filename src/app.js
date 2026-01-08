const express = require('express');
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Jenkins Auto Deployment Node API using git 🚀');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
