const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getMinutes()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute

setInterval(function () {
    var today = new Date();
    var minute = today.getMinutes();
    console.log(user.lastActivity, minute)
    if(user.lastActivity + 2  <= minute){
        console.log(user.lastActivity, minute,"First")
        inactiveFirstStage();
    }
    else if(user.lastActivity + 4  <= minute){
        console.log(user.lastActivity, minute,"Second")
        inactiveSecondStage();
    }
    else if(user.lastActivity + 6  <= minute){
        console.log(user.lastActivity, minute,"Third")
        inactiveThirdStage();
    }
}, 1000);
