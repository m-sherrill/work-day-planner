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

  $("#hour8").val(localStorage.getItem("8am-btn"));
  $("#hour9").val(localStorage.getItem("9am-btn"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
