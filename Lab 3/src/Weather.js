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
          this.getMazagran();
          
        } else if(weather.toLowerCase().includes("fog")){
          this.getRedEye();
        } else if(weather.toLowerCase().includes("rainy")){
          this.getMocha();
        } else if(weather.toLowerCase().includes("cloudy")){
          this.getDoppio();
        } else if(weather.toLowerCase().includes("overcast")){
          this.getDoppio();
        } else if(weather.toLowerCase().includes("snow")){
          this.getGuayoyo();
        } else if(weather.toLowerCase().includes("sunny")){
          this.getColdBrew();
        } else {
          this.getDoppio();
        }
    }

    getMazagran(){
      const url = `https://api.sampleapis.com/coffee/iced`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayMazagran(data);
      });
    }

    displayMazagran(data){
      let coffee = data[5].title;
      let coffeepic = data[5].image;
      let desc = data[5].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }

    getRedEye(){
      const url = `https://api.sampleapis.com/coffee/hot`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayRedEye(data);
      });
    }

    displayRedEye(data){
      let coffee = data[7].title;
      let coffeepic = data[7].image;
      let desc = data[7].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }

    getMocha(){
      const url = `https://api.sampleapis.com/coffee/hot`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayMocha(data);
      });
    }

    displayMocha(data){
      let coffee = data[11].title;
      let coffeepic = data[11].image;
      let desc = data[11].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }

    getDoppio(){
      const url = `https://api.sampleapis.com/coffee/hot`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayDoppio(data);
      });
    }

    displayDoppio(data){
      let coffee = data[5].title;
      let coffeepic = data[5].image;
      let desc = data[5].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }

    getGuayoyo(){
      const url = `https://api.sampleapis.com/coffee/hot`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayGuayoyo(data);
      });
    }

    displayGuayoyo(data){
      let coffee = data[17].title;
      let coffeepic = data[17].image;
      let desc = data[17].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }

    getColdBrew(){
      const url = `https://api.sampleapis.com/coffee/iced`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.displayColdBrew(data);
      });
    }

    displayColdBrew(data){
      let coffee = data[2].title;
      let coffeepic = data[2].image;
      let desc = data[2].description;
      document.querySelector(".coffee").innerText = coffee;
      document.querySelector(".pic").src = coffeepic;
      document.querySelector(".info").innerText = desc;
    }
  }