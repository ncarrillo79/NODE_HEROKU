//https://www.youtube.com/watch?v=8AE5uAacqxM&t=8709s

const express = require('express')

const app = express()

//app.use((req, res, next)=>{
//    console.log('novo usuario')
 //   next()
    
//})

app.get('/' , (req, res)=>{
   
   res.sendFile(__dirname + '/miPagina.html')
})

app.get('/muestra-imagem', (req, res)=>{
    res.sendFile(__dirname + '/js.png')
})

app.get('/heroku', (req, res)=>{
    res.send('ta rodando heroku!!!!')
})

app.get('/habilidades', (req, res) =>{
    res.send('habilidades')
})

app.get('/new', (req, res)=>{
    res.send('nueva rota!!!!')
})
app.listen(process.env.PORT ||3000)








// const http = require('http')

// http.createServer(function (req, res){
//     res.end('<h1>servidor rodando</h1>')
// }).listen(3000)