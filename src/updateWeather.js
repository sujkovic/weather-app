import kToF from "./kToF";

const updateWeather = () => {
    document.querySelector('.mainTemp').textContent = kToF(window.globalWeatherData.main.temp);
}

export default updateWeather;