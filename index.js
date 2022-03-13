var express = require('express');
var app = express();


app.get('/fixturesOverview', function (req, res) {
    // read JSON from file. 
    const FixturesOverview = [
        {
          league: 'Premier League',
          matches: [
            {
              home: 'Chelsea',
              homeColour: 'blue',
              away: 'Liverpool',
              awayColour: 'red',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Sky Sports',
            },
            {
              home: 'Leeds',
              homeColour: 'white',
              away: 'Liverpool',
              awayColour: 'red',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Amazon Prime',
            },
          ],
        },
        {
          league: 'Championship',
          matches: [
            {
              home: 'Middlesborough',
              homeColour: 'red',
              away: 'Birmingham',
              awayColour: 'blue',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Amazon Prime',
            },
            {
              home: 'Hull City',
              homeColour: 'orange',
              away: 'Preston',
              awayColour: 'blue',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Sky Sports',
            },
            {
              home: 'Chelsea',
              homeColour: 'blue',
              away: 'Liverpool',
              awayColour: 'red',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Sky Sports',
            },
            {
              home: 'Leeds',
              homeColor: 'white',
              away: 'Liverpool',
              awayColour: 'red',
              kickOff: 'Thu 10, 19:45',
              broadcaster: 'Amazon Prime',
            },
          ],
        },
      ];

    res.send(FixturesOverview);
})

app.get('/upcomingFixtures', function (req, res) {
   
const UpcomingFixtures = [
    {
      home: 'Middlesborough',
      homeColour: 'red',
      away: 'Birmingham',
      awayColour: 'blue',
      kickOff: 'Thu 10, 19:45',
      broadcaster: 'Amazon Prime',
    },
    {
      home: 'Hull City',
      homeColour: 'orange',
      away: 'Preston',
      awayColour: 'blue',
      kickOff: 'Thu 10, 19:45',
      broadcaster: 'Sky Sports',
    },
    {
      home: 'Leeds',
      homeColour: 'white',
      away: 'Liverpool',
      awayColour: 'red',
      kickOff: 'Thu 10, 19:45',
      broadcaster: 'Amazon Prime',
    },
  ];


    res.send(UpcomingFixtures);
})



app.listen(8082, () => {
    console.log('listening on port 8082');
  });