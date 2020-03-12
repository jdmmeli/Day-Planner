$(document).ready(function () {

    var dateFormat = moment().format('MMMM Do')
    var dayFormat = moment().format('dddd')
    $("#current-date").text(dayFormat + ", " + dateFormat)


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


    $("#nine").on("click", function () {
        var nine = $("#9am").val();
        console.log(nine)
        localStorage.setItem("nineA", JSON.stringify(nine));
    })

    $("#ten").on("click", function () {
        var ten = $("#10am").val();
        console.log(ten);
        localStorage.setItem("tenA", JSON.stringify(ten));
    })

    $("#eleven").on("click", function () {
        var eleven = $("#11am").val();
        console.log(eleven)
        localStorage.setItem("elevenA", JSON.stringify(eleven));
    })

    $("#twelve").on("click", function () {
        var twelve = $("#12am").val();
        console.log(twelve)
        localStorage.setItem("twelveP", JSON.stringify(twelve));
    })

    $("#one").on("click", function () {
        var one = $("#1pm").val();
        console.log(one)
        localStorage.setItem("oneP", JSON.stringify(one));
    })

    $("#two").on("click", function () {
        var two = $("#2pm").val();
        console.log(two)
        localStorage.setItem("twoP", JSON.stringify(two));
    })

    $("#three").on("click", function () {
        var three = $("#3pm").val();
        console.log(three)
        localStorage.setItem("threeP", JSON.stringify(three));
    })

    $("#four").on("click", function () {
        var four = $("#4pm").val();
        console.log(four)
        localStorage.setItem("fourP", JSON.stringify(four));
    })

    $("#five").on("click", function () {
        var five = $("#5pm").val();
        console.log(five)
        localStorage.setItem("fiveP", JSON.stringify(five));
    })

    



























})