const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require("./routes/gabs").router; 

const app = express();
 
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corsOptions));

require('dotenv').config();

// app.use(express.static('./assets'));

app.use(express.json());

app.use('/', routes);

const port = process.env.PORT || 8088;

app.listen(port, () => console.log(`Listening on ${port}`));
