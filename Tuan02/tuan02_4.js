function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// 1. Tạo một mảng 'bills' chứa tất cả 10 giá trị hóa đơn thử nghiệm
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Tạo các mảng trống cho tiền boa và tổng số ('tips' và 'totals')
const tips = [];
const totals = [];
// 3. Sử dụng hàm 'calcTip' chúng ta đã viết trước đó (không cần lặp lại) để tính toán
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(" Bills: ");
console.log(bills);
console.log(" Tips: ");
console.log(tips);
console.log(" Totals: ");
console.log(totals);
// 4. Bonus
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(`Average: ${calcAverage(totals)}`);
