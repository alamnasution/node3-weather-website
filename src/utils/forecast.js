const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(long) + '&appid=a7e5a6dc9c3cb991527ba8df340b18bd&units=metric'

    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.message) {
            callback('Unable to find forecast', undefined)
        } else {
            callback(undefined, "It is currently " + body.main.temp + " degrees out. And humidity for this place is " + body.main.humidity + ".")
        }
    })
}

module.exports = forecast