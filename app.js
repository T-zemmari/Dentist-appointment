const express = require('express')
const cors = require('cors')
const router = require('./router');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3001;


app.use(cors())
app.use(express.json());
app.use(router);

db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`);
    })
}).catch(console.log);
