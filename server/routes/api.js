const express = require('express')
const request = require('request')
const router = express.Router()

const db = require('../model/city')

const apiKey = "5ec2aa9d727dc17e546fe45089f46519" //weather api

// Routes setup

router.get('/', (req,res) => {
    console.log("Someone has come into the server.")
    res.send("Server is up and running smoothly")
})

router.get ('/city/:cityName', (req,res) => {
    const cityName = req.params.cityName
    request(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`, (err, response) => {
        const weatherInfo =JSON.parse(response.body)    
        const weather = {
                cityName: weatherInfo.location.name,
                description : weatherInfo.current.weather_descriptions[0],
                temp : weatherInfo.current.temperature,
                icon: weatherInfo.current.weather_icons[0],
                lastUpdated: weatherInfo.current.observation_time,
                saved: false
        }
        res.send(weather)
    })
})


router.get('/cities', function (req,res) {
    let citiesFromDB = []
    db.collection('cities').get()
    .then(cities => {
        cities.docs.forEach( doc => {
            cityData = doc.data()
            cityData.saved = true
            citiesFromDB.push(cityData)
        })
        res.send(citiesFromDB)  
    })
    
})

router.post('/city', (req,res) => {
    const cityInfo = req.body
    const cityName = cityInfo.cityName
    db.doc('cities/' + cityName).set(cityInfo)
    res.send("just added : " + cityName +" to the db")
})

router.delete('/city/:cityName', (req,res) => {
    const cityName = req.params.cityName
    db.collection('cities').doc(cityName).delete()
    res.send("just deleted : " + cityName +" from the db")
})


module.exports = router
