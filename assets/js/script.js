// Page elements 
let displayDate = $("#display-date")

// Display the current day at the top of the page
displayDate.html(moment().format("MMM Do YYYY"))

// Arrays 
let hours = ["8 AM", "9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
let hoursShort = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]

// function to generate the time slot HTML
function generateHTML() {
  for (let i = 0; i < hours.length; i++) {
    let htmlBlock = `<div class="row"><div class="col-2 time" name="${hoursShort[i]}">${hours[i]}</div><div class="input-container col-7"><textarea class="description" id="hour${hoursShort[i]}" placeholder="Write in your plan here..."></textarea></div><div class="col-3" id="save-container"><button class="save-button" alt="save button" name="${hoursShort[i]}-btn"><img src="assets/images/save.png"></button> <button class="clear-button" alt="Clear Button" name="${hoursShort[i]}-btn"><img src="assets/images/clear.png"></button></div></div>`
    $(".container").append(htmlBlock)
  }
}

// render the HTML
generateHTML()

// Page elements 
let saveButton = $(".save-button")
let inputContainer = $(".input-container")
let description = $(".description")

// Putting the local storage data on the page
$("#hour08").val(localStorage.getItem("08-btn"))
$("#hour09").val(localStorage.getItem("09-btn"))
$("#hour10").val(localStorage.getItem("10-btn"))
$("#hour11").val(localStorage.getItem("11-btn"))
$("#hour12").val(localStorage.getItem("12-btn"))
$("#hour13").val(localStorage.getItem("13-btn"))
$("#hour14").val(localStorage.getItem("14-btn"))
$("#hour15").val(localStorage.getItem("15-btn"))
$("#hour16").val(localStorage.getItem("16-btn"))
$("#hour17").val(localStorage.getItem("17-btn"))

// Color Coding Function
function colorCode() {
  let currentTime = moment().format('HH')
  let timeContainer = $(".time")

  timeContainer.each(function () {
    let timeBlockTime = $(this).attr("name")
    if (timeBlockTime < currentTime) {
      $(this).attr("id", "past")
    } else if (timeBlockTime === currentTime) {
      $(this).attr("id", "present")
    } else if (timeBlockTime > currentTime) {
      $(this).attr("id", "future")
    }
  })
}

// Launching the color coding function
colorCode()

// Save Button to add input to local storage
saveButton.on('click', function () {
  let description = $(this).parent("div").siblings(".input-container").children(".description").val()
  let btnName = $(this).attr("name")
  localStorage.setItem(btnName, description)
});

// Clear Button Per Line
$(".clear-button").on("click", function () {
  let btnName = $(this).attr("name")
  localStorage.removeItem(btnName)
  location.reload(true)
})

// Clearing whole day to start fresh
$("#clear-day").on("click", function () {
  localStorage.clear()
  location.reload(true)
})