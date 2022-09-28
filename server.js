const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3333

const app = express()
app.use(cors())
const rappers = {
  '21 savage': {
  'birthName': "Sheya Bin Abraham-Joseph",
  'birthLocation': 'London, England',
  'age': 29
  },
  'chance the rapper': {
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois',
    'age': 29
  },
  'unknown': {
    'birthName': 'unknown',
    'birthLocation': 'unknown',
    'age': 0
  }
}

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
  response.json(rappers)
})

app.get('/api/:name', (request, response)=>{
  const name = request.params.name.toLowerCase()
  if (rappers[name]){
    response.json(rappers[name])
  } else {
    response.json(rappers['unknown'])
  }
})

// app.post('', (request, response)=>{
//   request.
// })

app.put

app.delete('', (request, response)=>{

})


app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})