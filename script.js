$(function () {
  //simply displays the current day
var today = moment().format('dddd MMMM Do');
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
})