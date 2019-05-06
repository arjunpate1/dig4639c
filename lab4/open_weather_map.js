const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";
const WEATHER_UNIT = "metric";

function zipUrl(zip) {
  var out = `${API_STEM}q=${zip}&units=${WEATHER_UNIT}&APPID=${WEATHER_API_KEY}`;
  debugger;
  return out;
}

function latLonUrl(lat, lon) {
  return `${API_STEM}lat=${lat}&lon=${lon}&units=${WEATHER_UNIT}&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch(error => {
      console.error(error);
    });
}


function fetchZipForecast(zip) {
  return fetchForecast(zipUrl(zip));
}

function fetchLatLonForecast(lat, lon) {
  return fetchForecast(latLonUrl(lat, lon));
}

export default {
  fetchZipForecast: fetchZipForecast,
  fetchLatLonForecast: fetchLatLonForecast
};
