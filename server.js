const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
