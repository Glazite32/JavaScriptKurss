//  question 1.1
let firstName = "Davis";
let lastName = "Zuravlevs";
let age = 23;
let university = "VIA";
let currentYearOfStudy = 3;

// question 1.2
let grade1 = 8;
let grade2 = 6;
let grade = 7;

let TotalGrade = (grade1 + grade2 + grade);
let averageGrade = TotalGrade / 3;
console.log("Average grade: " + averageGrade);
console.log("Total grade: " + TotalGrade);

// question 1.3
let price = 80;
let quantity = 3;
let discount = 0.10;

let totalPrice = price * quantity;
let discountedPrice = totalPrice - (totalPrice * discount); 
console.log("Total price: " + discountedPrice);

// question 1.4

let a = 15;
let b = 4;

let remainder = a / b;
console.log("Remainder: " + remainder);
let powerOf = Math.pow(a, b);
console.log("Power of: " + powerOf);

if (a > b) {
    console.log("a is greater than b");
}else if (a < b) {
    console.log("b is greater than a");
}else{
    console.log("a and b are the same");
}

