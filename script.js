// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  //simply displays the current day
var today = moment().format('dddd');
$('#currentDay').text(today);


//this code block color codes each time block based on past/present/future (truncated to the hour) by adding the relevant classes.
var hour = moment().format('H');

for (var i = 9; i <= 17; i++) {
  var id = "#hour-" + i;
  if (hour < i) {
    $(id).addClass("future");
  } else if (hour == i) {
    $(id).addClass("present");
  } else {
    $(id).addClass("past");
  }

}



//this code block sets the event listener for the hour 9 save button, which saves to local storage and also pulls any saved value on load.
//I couldn't get the for loop I was working on to cooperate, so this is just the long/messy way. But it works.
var saved9 = localStorage.getItem('hour-9');
$('#hour-9').children("textarea").val(saved9);
$("#btn-9").click(function () {
  var text = $("#btn-9").siblings("textarea").val();
  localStorage.setItem('hour-9', text);
});

var saved10 = localStorage.getItem('hour-10');
$('#hour-10').children("textarea").val(saved10);
$("#btn-10").click(function () {
  var text = $("#btn-10").siblings("textarea").val();
  localStorage.setItem('hour-10', text);
});

var saved11 = localStorage.getItem('hour-11');
$('#hour-11').children("textarea").val(saved11);
$("#btn-11").click(function () {
  var text = $("#btn-11").siblings("textarea").val();
  localStorage.setItem('hour-11', text);
});

var saved12 = localStorage.getItem('hour-12');
$('#hour-12').children("textarea").val(saved12);
$("#btn-12").click(function () {
  var text = $("#btn-12").siblings("textarea").val();
  localStorage.setItem('hour-12', text);
});

var saved13 = localStorage.getItem('hour-13');
$('#hour-13').children("textarea").val(saved13);
$("#btn-13").click(function () {
  var text = $("#btn-13").siblings("textarea").val();
  localStorage.setItem('hour-13', text);
});

var saved14 = localStorage.getItem('hour-14');
$('#hour-14').children("textarea").val(saved14);
$("#btn-14").click(function () {
  var text = $("#btn-14").siblings("textarea").val();
  localStorage.setItem('hour-14', text);
});

var saved15 = localStorage.getItem('hour-15');
$('#hour-15').children("textarea").val(saved15);
$("#btn-15").click(function () {
  var text = $("#btn-15").siblings("textarea").val();
  localStorage.setItem('hour-15', text);
});

var saved16 = localStorage.getItem('hour-16');
$('#hour-16').children("textarea").val(saved16);
$("#btn-16").click(function () {
  var text = $("#btn-16").siblings("textarea").val();
  localStorage.setItem('hour-16', text);
});

var saved17 = localStorage.getItem('hour-17');
$('#hour-17').children("textarea").val(saved17);
$("#btn-17").click(function () {
  var text = $("#btn-17").siblings("textarea").val();
  localStorage.setItem('hour-17', text);
});
//This loop is acting up. You can do it the long way if you can't get it working
// for (var i = 9; i <= 17; i++) {
//   var button = "#btn-" + i;
//   $(button).click(function() {
//    var text = $(button).prev("textarea").val();
//    console.log(button);
//    localStorage.setItem('hour-'+ i, text);
//   })
//  }  
})


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.