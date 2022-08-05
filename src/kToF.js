const kToF = (temp) => {
    let tempVar = Math.round(((temp - 273.15) * 1.8) + 32);
    return `${tempVar} °F`;
}

export default kToF;