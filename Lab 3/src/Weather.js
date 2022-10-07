export default class Weather {
  constructor(api_key) {
    this.apiKey = api_key;
    this.getLocation();
    this.getBoost();
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

        if(weather == "Clear"){
          this.displayClear(data);
        }

    }

    getBoost(){
      const url = `https://pogoapi.net/api/v1/weather_boosts.json`
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.Clear);
        this.displayClear(data);
      });
    }

    displayClear(data){
      const clear1 = data.Clear[0];
      const clear2 = data.Clear[1];
      const clear3 = data.Clear[2];
      document.querySelector(".clear1").innerText = clear1;
      document.querySelector(".clear2").innerText = clear2;
      document.querySelector(".clear3").innerText = clear3;
    }
}