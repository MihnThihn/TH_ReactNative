// 1. Tạo object chứa thông tin của Mark và John
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

// 2. Tính BMI cho Mark và John
mark.calcBMI();
john.calcBMI();

// 3. So sánh BMI của Mark và John
if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${
        john.fullName
      }'s (${john.bmi.toFixed(2)})!`
    );
} else if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${
        mark.fullName
      }'s (${mark.bmi.toFixed(2)})!`
    );
} else {
    console.log("They have the same BMI");
}
