
// Connecting the classes and IDs on the page as variables
let displayDate = $("#display-date")
let saveButton = $(".save-button")
let inputContainer = $(".input-container")
let description = $(".description")

// Display the current day at the top of the page
displayDate.html(moment().format("MMM Do YYYY"))

// Save Button to add input to local storage
saveButton.on('click', function () {
  let description = $(this).parent("div").siblings(".input-container").children(".description").val()
  let btnName = $(this).attr("name")
  localStorage.setItem(btnName, description)
});


// Putting the local storage data on the page
$("#hour8").val(localStorage.getItem("8am-btn"))
$("#hour9").val(localStorage.getItem("9am-btn"))
$("#hour10").val(localStorage.getItem("10am-btn"))
$("#hour11").val(localStorage.getItem("11am-btn"))
$("#hour12").val(localStorage.getItem("12pm-btn"))
$("#hour13").val(localStorage.getItem("1pm-btn"))
$("#hour14").val(localStorage.getItem("2pm-btn"))
$("#hour15").val(localStorage.getItem("3pm-btn"))
$("#hour16").val(localStorage.getItem("4pm-btn"))
$("#hour17").val(localStorage.getItem("5pm-btn"))

// Launching the color coding function
colorCode()


// Color Coding Function
function colorCode() {
  let currentTime = moment().format('H')
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

// Clear Button Per Line
$(".clear-button").on("click", function () {
  let btnName = $(this).attr("name")
  localStorage.removeItem(btnName)
  console.log("i was clicked")
  console.log(btnName)
  location.reload(true)
})


// Clearing whole day to start fresh
$("#clear-day").on("click", function () {
  localStorage.clear()
  location.reload(true)
})