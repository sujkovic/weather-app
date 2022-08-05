import kToF from "./kToF";
import Rain from './assets/rain.jpg';
import Night from './assets/night.jpg';
import Cloudy from './assets/cloudy.jpg';
import Sunny from './assets/sunny.jpg';

const updateWeather = () => {
    document.querySelector('.mainTemp').textContent = kToF(window.globalWeatherData.main.temp);
    document.querySelector('.cityTitle').textContent = window.globalWeatherData.name;
    document.querySelector('.lowTemp').textContent = `Low ${kToF(window.globalWeatherData.main.temp_min)}`;
    document.querySelector('.feelsLike').textContent = `Feels like ${kToF(window.globalWeatherData.main.feels_like)}`;
    document.querySelector('.highTemp').textContent = `High ${kToF(window.globalWeatherData.main.temp_max)}`;
    
    if (window.globalWeatherData.dt > window.globalWeatherData.sys.sunset ||
        window.globalWeatherData.dt < window.globalWeatherData.sys.sunrise) {
        let night = new Image();
        night.src = Night;
        document.body.style.backgroundImage = "url('night.jpg')";
    }
    else if (window.globalWeatherData.weather[0].main === 'Rain') {
        let rain = new Image();
        rain.src = Rain;
        document.body.style.backgroundImage = "url('rain.jpg')";
    }
    else if (window.globalWeatherData.weather[0].main === 'Clouds') {
        let cloudy = new Image();
        cloudy.src = Cloudy;
        document.body.style.backgroundImage = "url('cloudy.jpg')";
    }
    else if (window.globalWeatherData.weather[0].main === 'Clear') {
        let sunny = new Image();
        sunny.src = Sunny;
        document.body.style.backgroundImage = "url('sunny.jpg')";
    }

}

export default updateWeather;