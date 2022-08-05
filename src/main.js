import './style.css';
import getWeather from './weatherData';
import renderHeader from './header';
import renderBody from './body';
import renderFooter from './footer';

window.globalWeatherData = '';
getWeather('new york city');
renderHeader();
renderBody();
renderFooter();


function updateWeather() {
    //  TODO - update the dom elements wit current city weather
}


//  debuggin 
setTimeout(() => {
    console.log(window.globalWeatherData.main.temp);
}, 1000);