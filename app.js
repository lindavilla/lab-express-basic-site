const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/home-page.html'));
  });

app.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/about-page.html'));
  });

app.get('/works', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/works-page.html'));
  });

app.get('/photogallery', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/photogallery-page.html'));
  });

app.listen(3000, () => {
    console.log('server running on port 3000')
 });