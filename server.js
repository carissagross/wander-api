const express = require('express')
const app = express() // setting up the server
const cors = require('cors')

// routes
app.set('port', process.env.PORT || 3000)
app.locals.title = 'Wander'

app.locals.hikes = [
    {id: '1', name: 'Ice Lake Basin', location: 'Silverthorne, CO', difficulty: 'Hard', distance:'8.4', image:''},
    {id: '2', name: 'Crater Lake', location: 'Tabernash, CO', difficulty: 'Hard', distance:'16', image: ''},
    {id: '3', name: 'Island Lake via Ice Lakes', location: 'Silverthorne, CO', difficulty: 'Hard', distance: '7.7', image: ''},
    {id: '4', name: 'Herman Gulch', location: 'Silver Plume, CO', difficulty: 'Hard', distance: '6.4', image:''},
    {id: '5', name: 'Square Top Lakes', location: 'Georgetown, CO', difficulty: 'Moderate', distance: '5', image:''},
    {id: '6', name: 'Upper Cataract Lake', location: 'Silverthorne, CO', difficulty: 'Moderate', distance: '10.2', image: ''},
    {id: '7', name: 'Gore Lake', location: 'Vail, CO', difficulty: 'Hard', distance: '12.1', image: ''},
    {id: '8', name: 'Columbine Lake', location: 'Silverton, CO', difficulty: 'Hard', distance: '8', image: ''},
    {id: '9', name: 'Mount Zirkel Loop', location: 'Clark, CO', difficulty: 'Hard', distance: '10.5', image: ''},
    {id: '10', name: 'Pitkin Lake', location: 'Vail, CO', difficulty: 'Hard', distnace: '10.5', image: ''},
    {id: '11', name: 'Salmon Lake', location: 'Silverthorne, CO', difficulty: 'Moderate', distance: '9.8', image: ''},
    {id: '12', name: 'Capitol Lake', location: 'Snowmass Village, CO', difficulty: 'Hard', distance: '15', image: ''},
    {id: '13', name: 'Chicago Lakes', location: 'Idaho Springs, CO', difficulty: 'Moderate', distance: '4.3', image: ''},
    {id: '14', name: 'Willow Lakes', location: 'Silverthorne, CO', difficulty: 'Hard', distance: '12', image: ''},
    {id: '15', name: 'American Lake', location: 'Aspen, CO', difficulty: 'Hard', distance: '7', image: ''},
    {id: '16', name:'Silver Dollar & Murray Lake', location: 'Georgetown, CO', difficulty: 'Moderate', distance: '4.3', image:''},
    {id: '17', name: 'McCullough Gulch', location: 'Breckenridge, CO', difficulty: 'Hard', distance: '6.5', image:''},
    {id: '18', name: 'Missouri Lakes / Fancy Pass', location: 'Red Cliff, CO', difficulty: 'Hard', distance: '9', image: ''},
    {id: '19', name: 'Lost Creek Wilderness Loop', location: 'Grant, CO', difficulty: 'Hard', distance: '28', image: ''},
    {id: '20', name: 'Shelf Lake', location: 'Silver Plume, CO', difficulty: 'Moderate', distance: '7.2', image: ''},
    {id: '21', name: 'Four Pass Loop', location: 'Aspen, CO', difficulty: 'Hard', distance: '26', image: ''},
    {id: '22', name: 'Pinos River to Emerald Lake', location: 'Bayfield, CO', difficulty: 'Hard', distance: '20.4', image: ''},
    {id: '23', name: 'Arapahoe Pass & Lake Dorothy', location: 'Nederland, CO', difficulty: 'Moderate', distance: '7.2', image: ''},
    {id: '24', name: 'Snowmass, Haystack and Capitol Lake Loop', location: 'Aspen, CO', difficulty: 'Hard', distance: '40.3', image: ''},
    {id: '25', name: 'Helms Lake', location: 'Grant, CO', difficulty: 'Moderate', distance: '11.8', image: ''},
    {id: '26', name: 'Turkey Trot', location: 'Morrison, CO', dificulty: 'Moderate', distance: '3.2', image: ''},
    {id: '27', name: 'Deluge Lake', location: 'Vail, CO', difficulty: 'Hard', distance: '9', image: ''},
    {id: '28', name: 'Snowmass Lake', location: 'Aspen, CO', diffculty: 'Hard', distance: '8.3', image: ''},
    {id: '29', name: 'Blue Lakes', location: 'Ridgeway, CO', difficulty: 'Hard', distance: '8.7', image: ''},
    {id: '30', name: 'Mayflower Gulch', location: 'Frisco, CO', difficulty: 'Moderate', distance: '4', image: }
]
app.get('/', (req, res) => {
    res.send('wander often!')
})

//server is listening on port 3000
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})

