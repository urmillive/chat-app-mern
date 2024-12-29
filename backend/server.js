const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.static('public'))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${ process.env.PORT || 3000 }`);
})
