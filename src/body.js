import createDomElement from "./createDomElement";

const renderBody = () => {
    let body = document.querySelector('body');
    let bodyWrapper = createDomElement('div', 'bodyWrapper');
    let mainWidget = createDomElement('div', 'mainWidget');
    let smallWidget = createDomElement('div', 'smallWidget');
    let cityTitle = createDomElement('div', 'cityTitle');
    let mainTemp = createDomElement('div', 'mainTemp');
    let lowTemp = createDomElement('div', 'lowTemp');
    let feelsLike = createDomElement('div', 'feelsLike');
    let highTemp = createDomElement('div', 'highTemp');
    smallWidget.append(lowTemp);
    smallWidget.append(feelsLike);
    smallWidget.append(highTemp);
    mainWidget.append(cityTitle);
    mainWidget.append(mainTemp);
    mainWidget.append(smallWidget);
    bodyWrapper.append(mainWidget);
    body.append(bodyWrapper);
}

export default renderBody;