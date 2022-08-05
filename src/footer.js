import createDomElement from "./createDomElement";

const renderFooter = () => {
    let footer = createDomElement('footer');
    let footerText = createDomElement('a', 'footerText', 'Ⓒ  Adrian Sujkovic');
    footerText.href = 'https://github.com/sujkovic'
    footer.append(footerText)
    document.querySelector('body').append(footer);
}

export default renderFooter;