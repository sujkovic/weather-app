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

//  Future TODO's
//  add celcius button(make global bool, in kToF func make ternary operator)
//  figure out wind format and add it in format 'Wind SE at 6mph' (i believe its in m/s)
//  add sunrise/sunset (convert from unix time)