// Function to calculate PAYE (Pay As You Earn)↩
function calculatePAYE(taxableIncome) {
    // Tax brackets and rates↩
    const taxBrackets = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32334, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.3 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    let taxDue = 0;
    for (const bracket of taxBrackets) {
        if (taxableIncome <= 0) break;
        
        let taxableAmountInBracket = Math.min(taxableIncome, bracket.max - bracket.min + 1);
        taxDue += taxableAmountInBracket * bracket.rate;
        taxableIncome -= taxableAmountInBracket;
    }

    return taxDue;
}

// Function to calculate NHIF deduction↩
function calculateNHIF(grossSalary) {
    // NHIF brackets and deductions↩
    const nhifBrackets = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    let nhifDeduction = 0;
    for (const bracket of nhifBrackets) {
        if (grossSalary <= bracket.max) {
            nhifDeduction = bracket.deduction;
            break;
        }
    }

    return nhifDeduction;
}

// Function to calculate NSSF contribution
function calculateNSSF(grossSalary) {
    // NSSF contribution rate
    const nssfRate = 0.06;
    const nssfMaxPensionable = 7000;

    let nssfContribution = grossSalary <= nssfMaxPensionable ? grossSalary * nssfRate : nssfMaxPensionable * nssfRate;
    return nssfContribution;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    const taxableIncome = grossSalary - 2400; // considering personal relief
    const paye = calculatePAYE(taxableIncome);

    // Calculate NHIF
    const nhif = calculateNHIF(grossSalary);

    // Calculate NSSF
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const deductions = paye + nhif + nssf;
    const netSalary = grossSalary - deductions;

    return netSalary;
}

// Example usage:
const basicSalary = 50000;  // Example basic salary↩
const benefits = 20000;     // Example benefits↩
const netSalary = calculateNetSalary(basicSalary, benefits);

console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);