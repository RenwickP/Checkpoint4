import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let template = "";
  let temp = store.State.weather;
  template = temp.Template;
  document.querySelector("#weather").innerHTML = template;
  // console.log("THE WEATHER MAN SAYS:", store.State.weather);
}

export default class WeatherController {
  constructor() {
    WeatherService.getWeather();
    store.subscribe("weather", drawWeather);
  }
}
