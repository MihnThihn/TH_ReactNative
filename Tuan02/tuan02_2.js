// 1. Hàm tính tiền tip
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// 2. Mảng chứa các hóa đơn
const bills = [125, 555, 44];

// 3. Mảng chứa các tiền tip
const tips = bills.map((bill) => calcTip(bill));

// 4. Mảng chứa tổng tiền
const totals = bills.map((bill, i) => bill + tips[i]);

console.log("Bills: ");
console.log(bills);
console.log("Tips: ");
console.log(tips);
console.log("Totals: ");
console.log(totals);
