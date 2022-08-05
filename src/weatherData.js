import updateWeather from "./updateWeather";

const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5d09efeb24b2909003891108c53b70f2`, { mode: 'cors' });
    window.globalWeatherData = await response.json();
    //document.querySelector('.mainTemp')
}

export default getWeather;