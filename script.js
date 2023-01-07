const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8df4f34f04mshe540dad8c2a5775p1abfb6jsn553c90e27759',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
      //  cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rajkot', options)
	.then(response => response.json())
	.then(response =>  {

    console.log(response)

    temp3.innerHTML = response.temp
    feels_like3.innerHTML = response.feels_like
    humidity3.innerHTML = response.humidity
    min_temp3.innerHTML = response.min_temp
    max_temp3.innerHTML = response.max_temp
    wind_degrees3.innerHTML = response.wind_degrees
    wind_speed3.innerHTML = response.wind_speed
    sunrise3.innerHTML = response.sunrise
    sunset3.innerHTML = response.sunset

    })

    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response => response.json())
.then(response =>  {

console.log(response)

temp4.innerHTML = response.temp
feels_like4.innerHTML = response.feels_like
humidity4.innerHTML = response.humidity
min_temp4.innerHTML = response.min_temp
max_temp4.innerHTML = response.max_temp
wind_degrees4.innerHTML = response.wind_degrees
wind_speed4.innerHTML = response.wind_speed
sunrise4.innerHTML = response.sunrise
sunset4.innerHTML = response.sunset

})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
.then(response => response.json())
.then(response =>  {

console.log(response)
temp5.innerHTML = response.temp
feels_like5.innerHTML = response.feels_like
humidity5.innerHTML = response.humidity
min_temp5.innerHTML = response.min_temp
max_temp5.innerHTML = response.max_temp
wind_degrees5.innerHTML = response.wind_degrees
wind_speed5.innerHTML = response.wind_speed
sunrise5.innerHTML = response.sunrise
sunset5.innerHTML = response.sunset

})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
.then(response => response.json())
.then(response =>  {

console.log(response)
temp6.innerHTML = response.temp
feels_like6.innerHTML = response.feels_like
humidity6.innerHTML = response.humidity
min_temp6.innerHTML = response.min_temp
max_temp6.innerHTML = response.max_temp
wind_degrees6.innerHTML = response.wind_degrees
wind_speed6.innerHTML = response.wind_speed
sunrise6.innerHTML = response.sunrise
sunset6.innerHTML = response.sunset

})

    submit.addEventListener("click", (e)=>{
            e.preventDefault()
            getWeather(city.value)
        })

    getWeather("Ahmedabad")