// Task 1: Function Declaration

let calculateSalary = (baseSalary, bonus, taxRate) => (baseSalary + bonus) - (baseSalary * taxRate) // Simple arrow function, can be completed on the same line without the need for the "return" keyword
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); // Expected ouput: "Net Salary: $6950.00"

// Task 2: Function Expression

let calculateDiscount = function(price, discountRate) {
   return price - (price * discountRate)}; // Similar solution to task 1, but formatted differently to be a function expression
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`); // Expected output: "Final Price: $80.00"
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function

let calculateServiceFee = (amount, serviceType) => {
    
    let serviceTypes = { // creating an object to store the fee associated with the input serviceType
    "Premium": 0.15,
    "Standard": 0.10,
    "Basic": 0.05
};
    
    let fee = (serviceTypes[serviceType] * amount).toFixed(2) // takes in the service type and matches it to the serviceTypes object
    return (`Service Fee: $${fee}`); // Decided to add the "Service Fee:" text to the return statement rather than the console.log to avoid redundancy
};

console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// Task 4: Parameters and Arguments

let calculateRentalCost = (days, carType, insurance = false) => {
    
    let rentalCost = { // Creating rental cost object
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };

    let balance = (rentalCost[carType] * days) 
    // creating a balance variable so that I can run the if statements to calculate insurance, otherwise this would just be the return statement

    if (insurance === true) { // if we have insurance, adding $20 to the balance for each day, then returning the balance
        balance += 20 * days
        return (`Total Rental Cost: $${balance}`)
    }

        return (`Total Rental Cost: $${balance}`) // No else statement necessary
};

console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180")
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500")

// Task 5: Returning Values

let calculateLoanPayment = (principal, rate, time) => `Total Payment $${(principal + (principal * rate * time)).toFixed(2)}` 
// writing this function as an arrow statement eliminates the need for a return keyword (i just learned that i can even add text to it)

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6: Higher-Order Functions

let transactions = [200, 1500, 3200, 800, 2500]; // initializing the transactions array 
let filterLargeTransactions = (transactions) => (transactions > 1000); // this takes in an individual transaction and returns true if the value is > 1000
let applyFilter = transactions.filter(filterLargeTransactions); // .filter() will only keep the values that are returned as true from filterLargeTransactions
console.log(applyFilter)