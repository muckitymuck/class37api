
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let films = {
    'starship troopers':{
        filmname: "Starship Troopers",
        year: 1997,
        genre: 'sci-fi'

    },
    'robocop' :{
        filmname: "Robocop",
        year: 1987,
        genre: 'sci-fi'
    },
    'basic instinct': {
        filmname: "Basic Instinct",
        year: 1992,
        genre: 'thriller'
    },
    'total recall': {
        filmname: "Total Recall",
        year: 1990,
        genre: 'sci-fi'
    },
    'unknown':{
        filmname: "Unknown",
        year: 0000,
        genre: 'sci-fi'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const filmName = request.params.name.toLowerCase()
    if(films[filmName]){
        response.json(films[filmName])
        } else {
            response.json(films['unknown'])
        }
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})