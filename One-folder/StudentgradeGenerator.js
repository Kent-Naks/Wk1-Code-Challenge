//Student score calc
//A start from anything greater than 79
//B start from anything equals to or great than 60
//and so on as shown below.

if (studentScore >79) {
    console.log ('Congratulations, ${studentName}, you scored ${studentScore}. A on test.');
} else if (studentScore >= 60 && studentScore < 80) {
    console.log ('Congratulations, ${studentName}, you scored ${studentScore}. B on this test.');
}
else if (studentScore >= 50 && studentScore < 60) {
    console.log('Congratulations, ${studentName}, you scored ${studentScore}. C on this test.');
}
else if (studentScore >=40 && studentScore < 50){
console.log('Hi, ${studentName}, you scored ${studentScore}. D on this test.');
}
else if (studentScore < 40){
   console.log('Hi, ${studentName}, you scored ${studentScore}. E on this test.');
   }

// To test, edit the studentscore. It is in let format allowing for changes.
//studentName is in const, bcoz it's not to be change.
   let studentScore = 80;
   const studentName = 'Kent';
