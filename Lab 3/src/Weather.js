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
            localStorage.setItem('weather', JSON.stringify(data));
            localStorage.setItem('weatherTime', Date.now());
            console.log(data);
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

        if(weather.toLowerCase().includes("clear")){
          this.getClear();
          document.querySelector(".grass").classList.remove("hidden");
          document.querySelector(".boost").classList.add("grasstext");
        } else if(weather.toLowerCase().includes("fog")){
          this.getFog();
          document.querySelector(".dark").classList.remove("hidden");
          document.querySelector(".boost").classList.add("darktext");
        } else if(weather.toLowerCase().includes("rainy")){
          this.getRainy();
          document.querySelector(".water").classList.remove("hidden");
          document.querySelector(".boost").classList.add("watertext");
        } else if(weather.toLowerCase().includes("cloudy")){
          this.getCloudy();
          document.querySelector(".normal").classList.remove("hidden");
          document.querySelector(".boost").classList.add("normaltext");
        } else if(weather.toLowerCase().includes("snow")){
          this.getSnow();
        } else if(weather.toLowerCase().includes("sunny")){
          this.getSun();
          document.querySelector(".fire").classList.remove("hidden");
          document.querySelector(".boost").classList.add("firetext");
        }
    }

    getClear(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayClear(data);
      });
    }

    displayClear(data){
      let boost = data.Clear[0];
      document.querySelector(".boost").innerText = boost;
    }

    getFog(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear[0]);
        this.displayFog(data);
      });
    }

    displayFog(data){
      let boost = data.Fog[0];
      document.querySelector(".boost").innerText = boost;
    }

    getRainy(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear[0]);
        this.displayRainy(data);
      });
    }

    displayRainy(data){
      let boost = data.Rainy[0];
      document.querySelector(".boost").innerText = boost;
    }

    getCloudy(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear[0]);
        this.displayCloudy(data);
      });
    }

    displayCloudy(data){
      let boost = data["Partly Cloudy"][0];
      document.querySelector(".boost").innerText = boost;
    }

    getSnow(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear[0]);
        this.displaySnow(data);
      });
    }

    displaySnow(data){
      let boost = data.Snow[0];
      document.querySelector(".boost").innerText = boost;
    }

    getSun(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear[0]);
        this.displaySun(data);
      });
    }

    displaySun(data){
      let boost = data.Clear[2];
      document.querySelector(".boost").innerText = boost;
    }
  }