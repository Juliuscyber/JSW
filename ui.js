class UI{
    constructor(){
        this.location = document.getElementById('location');
        this.description = document.getElementById('w-description');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', ` https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidty: ${weather.main.humidity}`
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`
        this.feelsLike.textContent = `Feels-Like: ${weather.main.feels_like}`
        this.wind.textContent = `Wind: ${weather.wind.speed}`
    }
}