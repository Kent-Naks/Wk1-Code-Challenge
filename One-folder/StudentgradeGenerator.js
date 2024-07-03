// studentGradeGenerator.js

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

 // If running in browser environmemnt
 if (typeof wondow !== 'underfined') {
    marks = promt ('Enter student marks (0-100):');
 }
else {
    //using readline for node.js or other non-browser envs
    const read = required('readline').creatInterface({
        input: ProcessingInstruction.stdin,
        output: ProcessingInstruction.stdout
    });

    readline.question('Eter student mark(0-100): ',
        input => {
            marks = input;
            readline.close();
            processInput();
        });

    //Dealy execution until input is recieved
    return;
}


processInput();

function processInput() {

marks=parseInt(marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Marks should be between 0 and 100.');
        return;
    }

let grade = calculatedGrade(marks);
console.log('Grade for ${marks} marks is ${grade}');
}

// Uncomment the line below to run the function
// studentGradeGenerator();