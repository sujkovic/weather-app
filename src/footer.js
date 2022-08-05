import createDomElement from "./createDomElement";

const renderFooter = () => {
    let footer = createDomElement('footer');
    let footerText = createDomElement('a', 'footerText', 'Ⓒ  Adrian Sujkovic');
    footer.append(footerText)
    document.querySelector('body').append(footer);
}

export default renderFooter;