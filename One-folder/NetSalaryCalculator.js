// Function to calculate PAYE (Pay As You Earn)
function calculateNetSalary(basicSalary, benefits) {
   let grossSalary = basicSalary + benefits;

//Starting with gross calculations from 24,000 upto 76,001
//Initial PAYE = Gross Sal * %Rate of Tax
//Following PAYE = Tax Cut + (Previous GS - Current GS) * %rate of Tax


let payee = 0;
if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
} else if (grossSalary <= 32333) {
    payee = 2400 + (grossSalary - 24000) * 0.25;
} else if (grossSalary <= 50000) {
    payee = 4483 + (grossSalary - 32333) * 0.30;
} else if (grossSalary <= 76000) {
    payee = 9783 + (grossSalary - 50000) * 0.33;
} else {
    payee = 18363 + (grossSalary - 76001) * 0.3;
}

//NHIF Tax deductions per pay rate group
let nhif = 0;
if (grossSalary <= 5999) {
    nhif = 150;
} else if (grossSalary <= 7999) {
    nhif = 300;
} else if (grossSalary <= 11999) {
    nhif = 400;
} else if (grossSalary <= 14999) {
    nhif = 500;
} else if (grossSalary <= 19999) {
    nhif = 600;
} else if (grossSalary <= 24999) {
    nhif = 750;
} else if (grossSalary <= 29999) {
    nhif = 850;
} else if (grossSalary <= 34999) {
    nhif = 900;
} else if (grossSalary <= 39999) {
    nhif = 950;
} else if (grossSalary <= 44999) {
    nhif = 1000;
} else if (grossSalary <= 49999) {
    nhif = 1100;
} else if (grossSalary <= 59999) {
    nhif = 1200;
} else if (grossSalary <= 69999) {
    nhif = 1300;
} else if (grossSalary <= 79999) {
    nhif = 1400;
} else if (grossSalary <= 89999) {
    nhif = 1500;
} else if (grossSalary <= 99999) {
    nhif = 1600;
} else {
    nhif = 1700;
}

    //NSSF Contributions of 6% of pensionable pay
    let nssf = grossSalary * 0.06;

    let netSalary = grossSalary - payee - nhif - nssf;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

let basicSalary = 0; 
let benefits = 0; 
let salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);