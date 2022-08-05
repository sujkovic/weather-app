import createDomElement from "./createDomElement";
import kToF from "./kToF";
import getWeather from "./weatherData";

const renderHeader = () => {
    let body = document.querySelector('body');
    let header = document.createElement('header');
    let left = createDomElement('div', 'headerLeft');
    let middle = createDomElement('div', 'headerMiddle');
    let right = createDomElement('div', 'headerRight');
    let searchBar = createDomElement('input', 'searchBar');
    let searchBtn = createDomElement('button', 'searchBtn', 'Search');
    searchBar.addEventListener('click', () => {
        getWeather(`${searchBar.value}`);
        document.querySelector('.mainTemp').textContent = kToF(window.globalWeatherData.main.temp);
    });
    searchBar.placeholder = 'Enter any city or zipcode';
    middle.append(searchBar);
    middle.append(searchBtn);
    header.append(left);
    header.append(middle);
    header.append(right);
    body.append(header);
}

export default renderHeader;