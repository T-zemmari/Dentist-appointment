const express = require('express')
const router = require('./router');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`);
    })
}).catch(console.log);
