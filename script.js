$(document).ready(function () {

    //formats time and the date
    var time = ("HH:mm:ss");
    var dateFormat = moment().format('MMMM Do');
    var dayFormat = moment().format('dddd');
    //displays the date in the div id current-date
    $("#current-date").text(dayFormat + ", " + dateFormat);
    
    //sets the interval for time
    var colorsTime = setInterval(colorsTime, 1000);
    //fills in the color in the black line
    $("#message").css("color" , "black");
    $("#message").css("background-color" , "black");
    //the woohoo on clicking 6pm
    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "https://www.fesliyanstudios.com/play-mp3/4238");


    

    //retrieves user input saved in local storage
    var niner = JSON.parse(localStorage.getItem("nineA"));
    $("#9am").val(niner);

    var tenner = JSON.parse(localStorage.getItem("tenA"));
    $("#10am").val(tenner);

    var elevener = JSON.parse(localStorage.getItem("elevenA"));
    $("#11am").val(elevener);

    var twelver = JSON.parse(localStorage.getItem("twelveP"));
    $("#12am").val(twelver);

    var oner = JSON.parse(localStorage.getItem("oneP"));
    $("#1pm").val(oner);

    var twoer = JSON.parse(localStorage.getItem("twoP"));
    $("#2pm").val(twoer);

    var threeer = JSON.parse(localStorage.getItem("threeP"));
    $("#3pm").val(threeer);

    var fourer = JSON.parse(localStorage.getItem("fourP"));
    $("#4pm").val(fourer);

    var fiver = JSON.parse(localStorage.getItem("fiveP"));
    $("#5pm").val(fiver);

    //onclick function that saves user input to local storage
    $("#nine").on("click", function () {
        var nine = $("#9am").val().trim();
        console.log(nine)
        localStorage.setItem("nineA", JSON.stringify(nine));
    })

    $("#ten").on("click", function () {
        var ten = $("#10am").val().trim();
        console.log(ten);
        localStorage.setItem("tenA", JSON.stringify(ten));
    })

    $("#eleven").on("click", function () {
        var eleven = $("#11am").val().trim();
        console.log(eleven)
        localStorage.setItem("elevenA", JSON.stringify(eleven));
    })

    $("#twelve").on("click", function () {
        var twelve = $("#12am").val().trim();
        console.log(twelve)
        localStorage.setItem("twelveP", JSON.stringify(twelve));
    })

    $("#one").on("click", function () {
        var one = $("#1pm").val().trim();
        console.log(one)
        localStorage.setItem("oneP", JSON.stringify(one));
    })

    $("#two").on("click", function () {
        var two = $("#2pm").val().trim();
        console.log(two)
        localStorage.setItem("twoP", JSON.stringify(two));
    })

    $("#three").on("click", function () {
        var three = $("#3pm").val().trim();
        console.log(three)
        localStorage.setItem("threeP", JSON.stringify(three));
    })

    $("#four").on("click", function () {
        var four = $("#4pm").val().trim();
        console.log(four)
        localStorage.setItem("fourP", JSON.stringify(four));
    })

    $("#five").on("click", function () {
        var five = $("#5pm").val().trim();
        console.log(five);
        localStorage.setItem("fiveP", JSON.stringify(five));
    });
    //function that color codes times slots
    colors ();
        
    function colors() {
        if (moment().isAfter(moment("9:59:59", time))) {
            $("#9am").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("9:00:00", time), moment("9:59:59" , time))) {
            $("#9am").css("background-color", "red");
        }

        else if (moment().isBefore(moment("8:59:59", time))) {
            $("#9am").css("background-color", "green");
        }

        if (moment().isAfter(moment("10:59:59", time))) {
            $("#10am").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("10:00:00", time), moment("10:59:59" , time))) {
            $("#10am").css("background-color", "red");
        }

        else if (moment().isBefore(moment("9:59:59", time))) {
            $("#10am").css("background-color", "green");
        }

        if (moment().isAfter(moment("11:59:59", time))) {
            $("#11am").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("11:00:00", time), moment("11:59:59" , time))) {
            $("#11am").css("background-color", "red");
        }

        else if (moment().isBefore(moment("10:59:59", time))) {
            $("#11am").css("background-color", "green");
        }

        if (moment().isAfter(moment("12:59:59", time))) {
            $("#12am").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("12:00:00", time), moment("12:59:59" , time))) {
            $("#12am").css("background-color", "red");
        }

        else if (moment().isBefore(moment("11:59:59", time))) {
            $("#12am").css("background-color", "green");
        }

        if (moment().isAfter(moment("13:59:59", time))) {
            $("#1pm").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("13:00:00", time), moment("13:59:59" , time))) {
            $("#1pm").css("background-color", "red");
        }

        else if (moment().isBefore(moment("12:59:59", time))) {
            $("#1pm").css("background-color", "green");
        }

        if (moment().isAfter(moment("14:59:59", time))) {
            $("#2pm").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("14:00:00", time), moment("14:59:59" , time))) {
            $("#2pm").css("background-color", "red");
        }

        else if (moment().isBefore(moment("13:59:59", time))) {
            $("#2pm").css("background-color", "green");
        }

        if (moment().isAfter(moment("15:59:59", time))) {
            $("#3pm").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("15:00:00", time), moment("15:59:59" , time))) {
            $("#3pm").css("background-color", "red");
        }

        else if (moment().isBefore(moment("14:59:59", time))) {
            $("#3pm").css("background-color", "green");
        }

        if (moment().isAfter(moment("16:59:59", time))) {
            $("#4pm").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("16:00:00", time), moment("16:59:59" , time))) {
            $("#4pm").css("background-color", "red");
        }

        else if (moment().isBefore(moment("15:59:59", time))) {
            $("#4pm").css("background-color", "green");
        }

        if (moment().isAfter(moment("17:59:59", time))) {
            $("#5pm").css("background-color", "lightgray");
        }

        else if (moment().isBetween(moment("17:00:00", time), moment("17:59:59" , time))) {
            $("#5pm").css("background-color", "red");
        }

        else if (moment().isBefore(moment("16:59:59", time))) {
            $("#5pm").css("background-color", "green");
        }
    }
     //onclick function that puts happy hour image on the page and plays audio when 6pm is clicked
    $("#surprise").on("click" , function() {
        $("#image-div").html("<img src='https://image.shutterstock.com/image-vector/happy-hour-burst-toasting-hands-260nw-250561168.jpg' />");
            audioElement.play();
    })








































})