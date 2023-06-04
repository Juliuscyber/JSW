class Weather{
    constructor(city){
        this.apikey = 'ab027d728586d1150cbeb3736e1bf581'; 
        this.city = city;
    }

async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`);

    const responseData = await response.json();

    return responseData;  
}
    changeLocation(city){
        this.city = city;
    }
}
