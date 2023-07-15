const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

// ROOT
app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Tharreq',
      email: 'mtharreq@gmail.com'
    },
    {
      nama: 'Reysa',
      email: 'reysa@gmail.com'
    },
    {
      nama: 'Gigih',
      email: 'gigih@gmail.com'
    },
  ]
  res.render('index', { 
    nama: 'Tharreq',
    title: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layout'
  })
})

// ABOUT
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'} )
})

// CONTANCT
app.get('/contact', (req, res) => {
  res.render('contact', { 
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'
  })
})

// PRODUCT
app.get('/product/:id', (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Category ID :  ${req.query.idCat}`)
})

// menangani halaman yang ga ada
app.use('/', (req, res) => {
  res.status(404)
  res.send('Tes')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})