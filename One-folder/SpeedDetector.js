// speedDetector.js
//Speed limit is const so use of Const is done
//let is used on points demerits coz it's a variable that can change
function calculatePoints(speed) {
    const speedLimit = 70;
    let Points = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        Points = Math.ceil((speed - speedLimit) / 5);
        console.log(`Points: ${Points}`);
    }

    if (Points > 12) {
        console.log("License suspended");
    }
}

let speed = 500;
calculatePoints(speed);

// Uncomment the line below to run the function
// speedDetector(80);