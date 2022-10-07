export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;
      if(
        localStorage.getItem('weather') &&
        Date.now() - localStorage.getItem('weatherTime') < 600000
        ){
        const weatherData = JSON.parse(localStorage.getItem('weather'));
        this.displayWeather(weatherData);
        }
      else{
            this.getLocation();
        }
  }

  getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            this.getWeather.bind(this)
            );
    }else{
        alert('Geolocation not supported');
    }
  }

  getWeather(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('weather', JSON.stringify(data));
            localStorage.setItem('weatherTime', Date.now());
            this.displayWeather(data);
        });
    }

    displayWeather(data){
        const temp = data.current.temp_c;
        document.querySelector(".weather__temp").innerText = temp + "°C";

        const weather = data.current.condition.text;
        document.querySelector(".weather__condition").innerText = weather;

        const icon = data.current.condition.icon;
        const img = document.createElement('img');
        img.src = icon;
        document.querySelector(".weather__icon").appendChild(img);

        if(weather.includes("Fog")){
          this.getClearBoost();
        } else if(weather == "Fog"){
          this.getFogBoost();
        }
    }

    getClearBoost(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.displayClearBoost(data);
      });
    }

    displayClearBoost(data){
      const boost = data.Clear;
      document.querySelector(".clear1").innerText = boost;
    }

    getFogBoost(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.displayClearBoost(data);
      });
    }

    displayFogBoost(data){
      const boost = data.Fog;
      document.querySelector(".clear1").innerText = boost;
    }
  }