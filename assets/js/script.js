

let displayDate = $("#display-date")
let saveButton = $(".save-button")
let inputContainer = $(".input-container")
let description = $(".description")


displayDate.html(moment().format("MMM Do YYYY"))


saveButton.on('click', function() {
    let description = $(this).parent("div").siblings(".input-container").children(".description").val()
    let btnName = $(this).attr("name")

    
    localStorage.setItem(btnName, description)
    

  });

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


  $("#clear-day").on("click", function() {
    localStorage.clear()
    location.reload(true)
  })

  colorCode()

  function colorCode() {
    let currentTime = moment().format('h')
    let timeContainer = $(".time")

    timeContainer.each(function() {
      let timeBlockTime = $(this).attr("name")

      if (timeBlockTime < currentTime) {
        $(this).attr("id", "past")
        return
      } else if (timeBlockTime === currentTime) {
        $(this).attr("id", "present")
        return
      } else if (timeBlockTime > currentTime) {
        $(this).attr("id", "future")
        return
      }
      
      console.log(currentTime, timeBlockTime)
    }
    )
    
  }

  