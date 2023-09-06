export const arraySum = (inputArray) => {
    let sumResult = 0;
    for (element of inputArray) {
        sumResult = sumResult + element;
    }
    return sumResult;
}
