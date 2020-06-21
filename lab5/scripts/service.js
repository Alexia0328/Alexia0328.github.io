
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{10}$/;;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\d{16}$/;;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
var unavailableDates1 = ["06/29/2020","07/07/2020","07/10/2020","27/08/2020"]
var unavailableDates2 = ["06/08/2020","07/21/2020","07/25/2020","09/09/2020"]
var unavailableDates3 = ["07/03/2020","07/18/2020","07/26/2020","23/08/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function disableDates1(date) {
    // Sunday is Day 0, disable all Sundays
    if ((date.getDay() == 0)||(date.getDay() == 1) || (date.getDay() == 2))
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates1.indexOf(string) == -1 ]
}

function disableDates2(date) {
    // Sunday is Day 0, disable all Sundays
    if ((date.getDay() == 2)||(date.getDay() == 6) || (date.getDay() == 0))
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates2.indexOf(string) == -1 ]
}

function disableDates3(date) {
    // Sunday is Day 0, disable all Sundays
    if ((date.getDay() == 0)||(date.getDay() == 4) || (date.getDay() == 5))
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates3.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone1").on("change", function(){
        if (!validatePhone("phone1")){
            alert("Wrong format for phone, it has to be a 10 digits");
            $("#phone1").val("xxxxxxxxxx");
            $("#phone1").addClass("error");
        }
        else {
            $("#phone1").removeClass("error");
        }
    });

    $("#debit1").on("change", function(){
        if (!validateCard("debit1")){
            alert("Wrong format for your card, it has to be a 16 digits");
            $("#debit1").val("xxxxxxxxxxxxxxxx");
            $("#debit1").addClass("error");
        }
        else {
            $("#debit1").removeClass("error");
        }
    });

    $("#phone2").on("change", function(){
        if (!validatePhone("phone2")){
            alert("Wrong format for phone, it has to be a 10 digits");
            $("#phone2").val("xxxxxxxxxx");
            $("#phone2").addClass("error");
        }
        else {
            $("#phone2").removeClass("error");
        }
    });

    $("#debit2").on("change", function(){
        if (!validateCard("debit2")){
            alert("Wrong format for your card, it has to be a 16 digits");
            $("#debit2").val("xxxxxxxxxxxxxxxx");
            $("#debit2").addClass("error");
        }
        else {
            $("#debit2").removeClass("error");
        }
    });

    $("#phone3").on("change", function(){
        if (!validatePhone("phone3")){
            alert("Wrong format for phone, it has to be a 10 digits");
            $("#phone3").val("xxxxxxxxxx");
            $("#phone3").addClass("error");
        }
        else {
            $("#phone3").removeClass("error");
        }
    });

    $("#debit3").on("change", function(){
        if (!validateCard("debit3")){
            alert("Wrong format for your card, it has to be a 16 digits");
            $("#debit3").val("xxxxxxxxxxxxxxxx");
            $("#debit3").addClass("error");
        }
        else {
            $("#debit3").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    $( "#dateInput1" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates1
        }   
    );


    $("#dateInput2").datepicker(
        {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates2
        }
    );   

    $("#dateInput3").datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates3
    }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});