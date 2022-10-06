const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(process.env.PORT || 3000, () => console.log('El servidor está corriendo en el puerto 3000'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/ingreso', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})