window.onload = function() {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = new Date();
    var dayOfWeek = daysOfWeek[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();

    // Add the appropriate suffix (e.g., 1st, 2nd, 3rd, etc.)
    var suffix = getDaySuffix(day);

    document.getElementById('dayOfWeek').innerHTML = dayOfWeek;
    document.getElementById('formattedDate').innerHTML = month + ". " + day + suffix;
};

// Function to get the day suffix (e.g., 1st, 2nd, 3rd, etc.)
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
