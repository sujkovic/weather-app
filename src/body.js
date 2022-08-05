import createDomElement from "./createDomElement";
import kToF from "./kToF";

const renderBody = () => {
    let body = document.querySelector('body');
    let bodyWrapper = createDomElement('div', 'bodyWrapper');
    let mainWidget = createDomElement('div', 'mainWidget');
    let mainTemp = createDomElement('div', 'mainTemp');
    setTimeout(() => {
        mainTemp.textContent = kToF(window.globalWeatherData.main.temp);
    }, 500);
    mainWidget.append(mainTemp);
    bodyWrapper.append(mainWidget);
    body.append(bodyWrapper);
}

export default renderBody;