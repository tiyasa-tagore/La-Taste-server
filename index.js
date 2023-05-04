const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const chefs = require('./chefsData/chefdata.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef recipe hunter is running...')
})
app.get('/all', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    const singleChef = chefs.find(chef => chef.id == id)
    res.send(singleChef)
})

app.listen(port, () => {
    console.log(`Chef recipe hunter is running on port ${port}`)
})
