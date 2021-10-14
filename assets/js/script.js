console.log(moment().subtract(10, 'days').calendar())

let displayDate = $("#display-date")
let saveButton = $(".save-button")
let inputContainer = $(".input-container")
let description = $(".description")


displayDate.html(moment().subtract(10, 'days').calendar())


// saveButton.on("click", function () {
    
// })

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