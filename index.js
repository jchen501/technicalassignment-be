const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

var routes = require('./routes/routes')

app.use('', routes);

app.listen(8080, () => console.log(`Listening on port 8080`));