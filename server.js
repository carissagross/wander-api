const express = require('express')
const app = express() // setting up the server
const cors = require('cors')

app.use(express.json())
app.use(cors())

// routes
app.set('port', process.env.PORT || 3001)
app.locals.title = 'Wander'
app.locals.hikes = [
    {
        id: '1',
        name: 'Ice Lake Basin',
        location: 'Silverthorne, CO',
        difficulty: 'Hard',
        distance:'8.4',
        elevation: '2,877',
        description: 'Generally considered a challenging route, this is a very popular area for backpacking, camping, and hiking. Dogs are welcome and may be off-leash in some areas.The lake is a great place to witness Colorado\'s biodiversity.', image: 'https://i.imgur.com/1V2t2nF.jpg'
    },
    {
        id:'2',
        name: 'Cascade Creek Trail to Mirror Lake',
        location: 'Tabernash, CO',
        difficulty: 'Hard',
        distance:'16',
        elevation: '2,322',
        description: 'Generally considered a challenging route, it takes an average of 7 h 0 min to complete. This is a very popular area for backpacking, camping, and fishing. Dogs are welcome, but must be on a leash.',
        image: 'https://i.imgur.com/fWzbvyC.jpg'
    },
    {
        id: '3',
        name: 'Island Lake via Ice Lakes',
        location: 'Silverthorne, CO',
        difficulty: 'Hard',
        distance: '7.7',
        elevation: '2,680',
        description: 'Generally considered a challenging route, it takes an average of 5 h 2 min to complete. This trail connects from the Ice Lake Basin Trail. Dogs are welcome but must be on leash.',
        image: 'https://i.imgur.com/XhcSAvH.jpg'
    },
    {
        id: '4',
        name: 'Herman Gulch',
        location: 'Silver Plume, CO',
        difficulty: 'Hard',
        distance: '6.4',
        elevation: '1,758',
        description: 'Starting on an old sawmill road, this trail emerges out of the forested trees within a mile of traveling. From here onwards, the subalpine wildflowers add beauty to otherwise rocky terrain. This is a very popular area for cross-country skiing, hiking, and horseback riding. Dogs are welcome, but must be on a leash.',
        image:'https://i.imgur.com/lczlXGG.jpg'
    },
    {
        id: '5',
        name: 'Square Top Lake',
        location: 'Georgetown, CO',
        difficulty: 'Moderate',
        distance: '5',
        elevation: '935',
        description: 'Generally considered a moderately challenging route, it provides views of sweeping valley vistas and Mount Bierstadt.  Dogs are welcome and may be off-leash in some areas.',
        image: 'https://i.imgur.com/zc3hWhu.jpg'
    },
    {
        id: '6',
        name: 'Upper Cataract Lake',
        location: 'Silverthorne, CO',
        difficulty: 'Moderate',
        distance: '10.2',
        elevation: '2,493',
        description: 'The hike begins in alpine fields and then winds through aspen groves to reach Surprise Lake. From there, the trail continues through similar groves until it reaches Upper Cataract and Mirror Lakes. This is a popular weekend backpacking spot, so leave early to score a campsite by one of the three lakes.',
        image: 'https://i.imgur.com/ejvfUhf.jpg'
    },
    {
        id: '7',
        name: 'Gore Lake',
        location: 'Vail, CO',
        difficulty: 'Hard',
        distance: '12.1',
        elevation: '2867',
        description: 'The first part is quite steep, but pleasantly weaves through fir and aspen forests along streams. The trail levels out quite a bit, starts passing through meadows with one last climb to the lake. Dogs are welcome, but must be on a leash.',
        image: 'https://i.imgur.com/l4aTa4p.jpg'
    },
    {
        id: '8',
        name: 'Columbine Lake',
        location: 'Silverton, CO',
        difficulty: 'Hard',
        distance: '8',
        elevation: '2,837',
        description: 'Starting right in on the switchbacks, the trail gains its first 1,000 feet of elevation in no time.  As you exit the trees, you start the climb into the first basin.  With a few more easy ups and downs, the trail reaches Columbine Lake. Dogs are welcome and may be off-leash in some areas.',
        image: 'https://i.imgur.com/rcYBCLR.jpg'
    },
    {
        id: '9',
        name: 'Mount Zirkel Loop',
        location: 'Clark, CO',
        difficulty: 'Hard',
        distance: '10.5',
        elevation: '2,444',
        description: 'For runners, new backpackers, families, or anyone looking for a weekend backpacking adventure, this loop is an ideal option with access to water, views, and side scrambles to tack on more miles. Dogs are welcome, but must be on a leash.',
        image: 'https://i.imgur.com/EzubiP5.jpg'
    },
    {
        id: '10',
        name: 'Pitkin Lake',
        location: 'Vail, CO',
        difficulty: 'Hard',
        distance: '10.5',
        elevation: '2,975',
        description: 'The north side of the Vail valley is blessed with several steep but rewarding trails leading all they way from the valley to the high alpine.  Dogs are welcome, but must be on a leash.',
        image: 'https://i.imgur.com/kGKv5GX.jpg'
    },
    {
        id: '11',
        name: 'Salmon Lake',
        location: 'Silverthorne, CO',
        difficulty: 'Moderate',
        distance: '9.8',
        elevation: '2,582',
        description: 'This heavily forested approach reaches a high alpine lake, along they way, take notice of the entire Gore Range.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/VkSNGzv.jpg'
    },
    {
        id: '12',
        name: 'Capitol Lake',
        location: 'Snowmass Village, CO',
        difficulty: 'Hard',
        distance: '15',
        elevation: '2,105',
        description: 'Capitol Lake sits in a basin at the northern base of Capitol Peak. Hikers, backpackers and climbers are treated to spectacular breathtaking views of Capitol Peak and the jagged rocky peaks and ridges.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/qUZyYMS.jpg'
    },
    {
        id: '13', 
        name: 'McCullough Gulch - Upper Lake',
        location: 'Breckenridge, CO',
        difficulty: 'Hard',
        distance: '6',
        elevation: '1,700',
        description: 'Explore an unnamed upper lake from McCullough Gulch that requires some route finding.  It is a quarter mile hike to the lake, adding another 300 feet of elevation gain.  Take in the views of an alpine lake sitting at 12,400 feet.',
        image:'https://i.imgur.com/9Bjvqc3.jpg'
    },
    {
        id: '14',
        name: 'Willow Lakes',
        location: 'Silverthorne, CO',
        difficulty: 'Hard',
        distance: '12',
        elevation: '2,596',
        description: 'The trail is forested pretty much the entire way to the lake and it hosts oen of the most stunning mountain ridges in all of Colorado.  This challenging hike is worth the sweat. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/9LqoXXv.jpg'
    },
    {
        id: '15',
        name: 'American Lake', 
        location: 'Aspen, CO',
        difficulty: 'Hard',
        distance: '7',
        elevation: '2,043',
        description: 'This short trail climbs steeply through aspen groves, forests and meadows to a high mountain lake just below timberline.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/oEvQhiU.jpg'},
    {
        id: '16',
        name:'Silver Dollar & Murray Lake',
        location: 'Georgetown, CO',
        difficulty: 'Moderate',
        distance: '4.3',
        elevation: '1,066',
        description: 'The hike moves in and out of the shade of thick forest and eventually climbs the basin ridge out of the trees.  Silver Dollar Lake sits at the slope of the basin and the trail continues another .5 miles to Murray Lake. Dogs are welcome, but must be on leash.',
        image:'https://i.imgur.com/23PGIsy.jpg'
    },
    {
        id: '17',
        name: 'McCullough Gulch',
        location: 'Breckenridge, CO',
        difficulty: 'Hard',
        distance: '6.5',
        elevation: '1,607',
        description: 'A popular hike with lakes, waterfalls, wildflowers, mountain goats and mountain views.  A gradual ascent, with some steep and rocky sections with rewarding views of the gulch from the upper lakes.  Dogs are welcome, but must be on leash.',
        image:'https://i.imgur.com/u7mkjx0.jpg'
    },
    {
        id: '18',
        name: 'Missouri Lakes / Fancy Pass',
        location: 'Red Cliff, CO',
        difficulty: 'Hard',
        distance: '9',
        elevation: '2,601',
        description: 'A fantastic loop with two passes, several lakes, and wonderful vistas of the Sawatch and Holy Cross Wilderness.  Be sure the weather is clear before making your way to Fancy Pass.  Make your way down the pass into an alpine valley and make your way up Missouri Pass to explore more lakes and panoramic views.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/JQQThWF.jpg'
    },
    {
        id: '19',
        name: 'Lost Creek Wilderness Loop',
        location: 'Bailey, CO',
        difficulty: 'Hard',
        distance: '28',
        elevation: '5,305',
        description: 'A beautiful backpacking loop through massive granite formations, splendid meadows, and lush forest.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/NqbPhsu.jpg'
    },
    {
        id: '20',
        name: 'Shelf Lake', 
        location: 'Silver Plume, CO',
        difficulty: 'Moderate',
        distance: '7.2',
        elevation: '1,968',
        description: 'A beautiful hike to a lake on a high bench above treeline.  The trail follows quickly up a series of switchbacks and 6 stream crossings until the final stretch to Shelf Lake.  Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/gbkOFGs.jpg'
    },
    {
        id: '21',
        name: 'Four Pass Loop',
        location: 'Aspen, CO',
        difficulty: 'Hard',
        distance: '26',
        elevation: '7,752',
        description: 'One for your tick list and a challenging backpacking trip through the Maroon Bells-Snowmass Wilderness.  You will encounter four 12,000 foot passes: Buckskin, Trail Rider, Frigid Air and West Maroon as you pass through meadows, alpine lakes and lush forests. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/DdfIfeK.jpg'
    },
    {
        id: '22',
        name: 'Pinos River to Emerald Lake',
        location: 'Bayfield, CO',
        difficulty: 'Hard',
        distance: '20.4',
        elevation: '3,028',
        description: 'Emerald Lake is an alpine lake located off of the Pine River Trail near Vallecito Reservoir.  It is remote, quiet and epic, making this journey a classic overnight stay. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/bLEaO2q.jpg'
    },
    {
        id: '23',
        name: 'Arapahoe Pass & Lake Dorothy',
        location: 'Nederland, CO',
        difficulty: 'Moderate',
        distance: '7.2',
        elevation: '1,942',
        description: 'Forested for the first half, then the trail emerges in spots for views across the canyon towards Diamond Lake.  Enjoy the views of Caribou Lake, Deer Lakes and the Arapaho Peaks.',
        image: 'https://i.imgur.com/J5Bzuyp.jpg'
    },
    {
        id: '24',
        name: 'Snowmass, Haystack and Capitol Lake Loop',
        location: 'Aspen, CO',
        difficulty: 'Hard',
        distance: '40.3',
        elevation: '11,227',
        description: 'This is an incredible journey to Snowmass Lake, up to Trail Rider Pass and onwards to Geneva Lake.  THe rest of the journey includes the steep incline to Avalanche Pass, down to Capitol Lake and you finish up on Haystack Mountain.  Challenging, remote and you will find yourself searching for the trail in some areas.  Worth every ounce of sweat and burning calves.',
        image: 'https://i.imgur.com/ZPXtnj0.jpg'
    },
    {
        id: '25',
        name: 'Helms Lake',
        location: 'Grant, CO',
        difficulty: 'Moderate',
        distance: '11.8',
        elevation:'2,404',
        description: 'Hike up a gravel trail through pine trees and an aspen grove to a sweeping valley. There is a final push up switchbacks to Helms Lake. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/AWoq8CV.jpg'
    },
    {
        id: '26',
        name: 'Turkey Trot',
        location: 'Morrison, CO',
        difficulty: 'Moderate',
        distance: '3.2',
        elevation:'800',
        description: 'A stunning hike with views of Denver and Red Rocks Amphitheater.  A steady incline takes you from desert terrain to lush pine forests with views of the mountains.  A perfect getaway when you do not have time to drive into the mountains. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/1Q0gzFF.jpg'
    },
    {
        id: '27',
        name: 'Deluge Lake', 
        location: 'Vail, CO',
        difficulty: 'Hard',
        distance: '9',
        elevation:'3,444',
        description: 'This sustained hike starts near East Vail through aspens and thick forest to a stunning alpine lake. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/u6DVazP.jpg'
    },
    {
        id: '28',
        name: 'Snowmass Lake',
        location: 'Aspen, CO',
        difficulty: 'Hard',
        distance: '17',
        elevation:'3,873',
        description: 'A challenging hike over Buckskin Pass to a beautiful alpine lake that sits at 10,980 feet.  A challenging day hike or fantastic overnight trip.',
        image: 'https://i.imgur.com/AVQRqu9.jpg'
    },
    {
        id: '29',
        name: 'Blue Lakes',
        location: 'Ridgeway, CO',
        difficulty: 'Hard',
        distance: '8.7',
        elevation:'2,509',
        description: 'Hike through forest alongside a rushing river, and after the first 2.3 miles you will reach the first lake with the second only a mile after that.  Experience the stunning blue hue of the water, eat some lunch, and explore the area.  Dogs are welcome, but must be on leash.', 
        image: 'https://i.imgur.com/tSlBrNw.jpg'
    },
    {
        id: '30',
        name: 'Mayflower Gulch',
        location: 'Frisco, CO',
        difficulty: 'Moderate',
        distance: '4',
        elevation:'1,141',
        description: 'A meandering trail through pines and forest.  You will pass old mining structures with beautiful views of the valley. Dogs are welcome, but must be on leash.',
        image: 'https://i.imgur.com/Clz8MY3.jpg'
    }
]

app.get('/', (req, res) => {
    res.send('Wander Often!')
})

app.get('/api/v1/hikes/', (req, res) => {
    const hikes = app.locals.hikes

    response.json({hikes})
})

app.get('/api/v1/hikes/:id', (req, resp) => {
    const { id } = req.params
    const hike = app.locals.hikes.find(hike => hike.id === id)

    if (!hike) {
        resp.sendStatus(400).send('not found')
    } else {
        resp.status(200).json(hike)
    }
})

app.post('api/v1/hikes', (req, res) => {
    const id = "" + app.locals.hikes.length
    const { name, location, difficulty, distance, elevation, description, image} = req.body

    app.locals.hikes.push({id, name, location, difficulty, distance, elevation, description, image})
    res.status(201).json(app.locals.hikes)
})

app.delete('api/v1/hikes', (req, res) => {
    const { id } = req.body
    app.locals.hikes.splice(Number(id), 1)

    res.status(201).json(app.locals.hikes)
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})

module.exports = app;