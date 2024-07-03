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

function studentGradeGenerator() {
    let marks = prompt('Enter student marks (0-100):');
    marks = parseInt(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Marks should be between 0 and 100.');
        return;
    }

    let grade = calculateGrade(marks);
    console.log(`Grade for ${marks} marks is ${grade}`);
}

// Uncomment the line below to run the function
// studentGradeGenerator();
