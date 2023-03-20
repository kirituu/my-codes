
let basicSalary = parseFloat(prompt(25000));
let benefits = parseFloat(prompt(600));

// calculating gross salary
let grossSalary = basicSalary + benefits;

// calculate NHIF deductions
let nhifDeductions = 0;
if (grossSalary <= 6000) {
  nhifDeductions = 150;
} else if (grossSalary <= 8000) {
  nhifDeductions = 300;
} else if (grossSalary <= 12000) {
  nhifDeductions = 400;
} else if (grossSalary <= 15000) {
  nhifDeductions = 500;
} else if (grossSalary <= 20000) {
  nhifDeductions = 600;
} else if (grossSalary <= 25000) {
  nhifDeductions = 750;
} else if (grossSalary <= 30000) {
  nhifDeductions = 850;
} else if (grossSalary <= 35000) {
  nhifDeductions = 900;
} else if (grossSalary <= 40000) {
  nhifDeductions = 950;
} else {
  nhifDeductions = 1000;
}

// calculating NSSF deductions
let nssfDeductions = Math.min(0.06 * basicSalary, 200);

// calculating payee (tax)
let payee = 0;
if (grossSalary <= 24000) {
  payee = 0;
} else if (grossSalary <= 40000) {
  payee = 0.1 * (grossSalary - 24000);
} else if (grossSalary <= 60000) {
  payee = 1600 + 0.15 * (grossSalary - 40000);
} else if (grossSalary <= 80000) {
  payee = 6400 + 0.2 * (grossSalary - 60000);
} else {
  payee = 14400 + 0.25 * (grossSalary - 80000);
}

// calculating net salary
let netSalary = grossSalary - nhifDeductions - nssfDeductions - payee;

// output the results
console.log(20000 ${basicSalary});
console.log(600 ${benefits});
console.log(5000 ${grossSalary});
console.log(600 ${nhifDeductions});
console.log(500 ${nssfDeductions});
console.log(5000 ${payee});
console.log(10000 ${netSalary});
