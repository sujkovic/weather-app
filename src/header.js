import createDomElement from "./createDomElement";
import getWeather from "./weatherData";

const renderHeader = () => {
    let body = document.querySelector('body');
    let header = document.createElement('header');
    let left = createDomElement('div', 'headerLeft');
    let middle = createDomElement('div', 'headerMiddle');
    let right = createDomElement('div', 'headerRight');
    let searchBar = createDomElement('input', 'searchBar');
    let searchBtn = createDomElement('button', 'searchBtn', 'Search');
    searchBtn.addEventListener('click', () => {
        getWeather(searchBar.value);
        searchBar.value = '';
    });
    searchBar.addEventListener('keypress', () => {
        if (event.key === 'Enter') {
            getWeather(searchBar.value);
            searchBar.value = '';
            searchBar.blur();
        }
    });
    searchBar.placeholder = 'Enter any city name';
    middle.append(searchBar);
    middle.append(searchBtn);
    header.append(left);
    header.append(middle);
    header.append(right);
    body.append(header);
}

export default renderHeader;