const calcAverage = (a, b, c) => (a + b + c) / 3;

// Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// To check if number A is at least double number B, check for A >= 2 * B
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win" + `(${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win" + `(${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
};

console.log("Data 1: ");
checkWinner(avgDolphins, avgKoalas);
console.log("Data 2: ");
checkWinner(avgDolphins2, avgKoalas2);
