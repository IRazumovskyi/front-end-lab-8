function getClosestToZero(...arr) {
    let number = arr[0];
    for (let i of arr) {
        if (Math.abs(i) < Math.abs(number)) {
            number = i;
        }
    }
    return number;
}