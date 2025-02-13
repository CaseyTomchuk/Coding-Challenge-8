// Task 1: Function Declaration

let calculateSalary = (baseSalary, bonus, taxRate) => (baseSalary + bonus) - (baseSalary * taxRate) // Simple arrow function, can be completed on the same line without the need for the "return" keyword
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); // Expected output: "Net Salary: $6950.00"