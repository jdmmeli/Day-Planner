$(document).ready(function () {

    var dateFormat = moment().format('MMMM Do')
    var dayFormat = moment().format('dddd')
    $("#current-date").text(dayFormat + ", " + dateFormat)

    $("#nine").on("click", function () {
        var nine = $("#9am").val();
        console.log(nine)
        localStorage.setItem("#nine", JSON.stringify(nine));
    })

    $("#ten").on("click", function () {
        var ten = $("#10am").val();
        console.log(ten);
        localStorage.setItem("#ten", JSON.stringify(ten));
    })

    $("#eleven").on("click", function () {
        var eleven = $("#11am").val();
        console.log(eleven)
        localStorage.setItem("#eleven", JSON.stringify(eleven));
    })

    $("#twelve").on("click", function () {
        var twelve = $("#12am").val();
        console.log(twelve)
        localStorage.setItem("#twelve", JSON.stringify(twelve));
    })

    $("#one").on("click", function () {
        var one = $("#1pm").val();
        console.log(one)
        localStorage.setItem("#one", JSON.stringify(one));
    })

    $("#two").on("click", function () {
        var two = $("#2pm").val();
        console.log(two)
        localStorage.setItem("#two", JSON.stringify(two));
    })

    $("#three").on("click", function () {
        var three = $("#3pm").val();
        console.log(three)
        localStorage.setItem("#three", JSON.stringify(three));
    })

    $("#four").on("click", function () {
        var four = $("#4pm").val();
        console.log(four)
        localStorage.setItem("#four", JSON.stringify(four));
    })

    $("#five").on("click", function () {
        var five = $("#5pm").val();
        console.log(five)
        localStorage.setItem("#five", JSON.stringify(five));
    })





























})