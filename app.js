//Question No. 1
function describeValue(value) {
    let type = typeof value;
    let truthiness = value ? "truthy" : "falsy";
    return `${type} | ${truthiness}`;
}
console.log(describeValue("Dhaka"));
console.log(describeValue(10));


//Question No. 2
function getDayType(day) {
    let lowerDay = day.toLowerCase();
    switch (lowerDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}
console.log(getDayType("Friday"  ));
console.log(getDayType("Sunday"));

//Question No. 3
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed!";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}
console.log(validateUsername("mahdi "));

//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;
    if (distance > 2) {
        fare += (distance - 2) * 15;
    }
    fare += waitingMinutes * 2;
    if (isNight) {
        fare = fare * 1.2;
    }
    return fare;
}            
console.log(getCngFare(1));              
console.log(getCngFare(5));              
console.log(getCngFare(10));              
console.log(getCngFare(5, false, 10));    
console.log(getCngFare(5, true));         
console.log(getCngFare(5, true, 10));     

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }
    let rate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    if (rate <= 6) {
        verdict = "Comfortable";
    } else if (rate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(describeValue("0")); 
console.log(getDayType("FRIDAY")); 
console.log(validateUsername("adminUser")); 
console.log(getCngFare(5, true, 10)); 
console.log(getChaseVerdict(150, 120, 18)); 