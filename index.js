function addNumber(array, number) {
    let failFlag = false;
    if (array.some((item) => typeof (item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        failFlag = true;
    } else {
        let StringOfNumbers = number;
        StringOfNumbers += parseInt(array.reduce((total, current) => total + current.toString()));
        return StringOfNumbers.toString(10).split('').map((item) => parseInt(item));
    }
    if (failFlag === true) {
        return null;
    }
}
module.exports = {
    addNumber,
};
