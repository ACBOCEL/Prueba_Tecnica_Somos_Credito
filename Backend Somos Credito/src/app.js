const express = require('express');
const cors = require('cors');
require('dotenv').config({ path:__dirname + '/../.env'});
const routes = require('./routes/index');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});