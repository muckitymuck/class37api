// const express = require('express')
// const app = express()
// const cors = require('cors')
// const PORT = 8000

// app.use(cors())

// let films = {
//     '21 savage': {
//         'age': 28,
//         'birthName': 'Shéyaa Bin Abraham-Joseph',
//         'birthdate': '22 October 1992', 
//         'birthLocation': 'London, England',
//         'origin': 'Atlanta, Georgia',
//         'genre': 'hip hop, trap, rap, horrorcore',
//         'occupation': 'rapper, songwriter, record producer',
//         'yearsActive': '2013-present',
//         'labels': 'Epic, Slaughter Gang',
//         'children': 3
//     },
//     'chance the rapper':{
//         'age': 28,
//         'birthName': 'Chancelor Jonathan Bennett',
//         'birthdate': 'April 16, 1993', 
//         'birthLocation': 'London, England',
//         'origin': 'Chicago, Illinois',
//         'genre': 'hip hop, alternative hip hop, r & b',
//         'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
//         'yearsActive': '2011-present',
//         'labels': 'none',
//         'children': 0
//     },
//     'unknown':{
//         'age': 'unknown',
//         'birthName': 'unknown',
//         'birthdate': 'unknown', 
//         'birthLocation': 'unknown',
//         'origin': 'unknown',
//         'genre': 'unknown',
//         'occupation': 'unknown',
//         'yearsActive': 'unknown',
//         'labels': 'unknown',
//         'children': 'unknown'
//     }
// }

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/:name', (request, response) => {
//     const filmName = request.params.name.toLowerCase()
//     if(films[filmName]){
//         response.json(films[filmName])
//     }else{
//         response.json(films['unknown'])
//     }
// })

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let films = {
    'starship troopers':{
        year: 1997,
        genre: 'sci-fi'

    },
    'robocop' :{
        year: 1987,
        genre: 'sci-fi'
    },
    'basic instinct': {
        year: 1992,
        genre: 'thriller'
    },
    'total recall': {
        year: 1990,
        genre: 'sci-fi'
    },
    'unknown':{
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