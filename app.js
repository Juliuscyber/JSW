//Init Storage class
const storage = new Storage();

const weatherLocation = storage.getLocationData();
//initialize weather object
const weather = new Weather(weatherLocation.city);
//initialize ui class
const ui = new UI();

//get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

const change = document.getElementById('w-change-btn');

change.addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    weather.changeLocation(city);

    storage.setLocationData(city);

    //calling getweather again
    getWeather();
    //close modal
    $('#locModal').modal('hide');
})

function getWeather(){
weather.getWeather()
    .then(results => {
        ui.paint(results)
    })
    .catch(err => console.log(err));
}