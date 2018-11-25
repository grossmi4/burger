//on DOM load...
$(function() {
  //set listener for any uneaten burger buttons
  $(".eat-da-burger-button").on("click", function(event) {
    const id = $(this).data("id");
    //send put request using the ID from the data element to set status to eaten
    $.ajax(`api/burger/${id}`, {
      type: 'PUT',
      data: {devoured:true} //I don't think this is actually required
    }).then(
      function() {
        console.log("ate the burger. id: " + id);
        location.reload();
      }
    );
  });

  $("#submit").on("click", function(event) {
    const newBurger = $("#burgerinput").val().trim();
    //validate length is greater than 0
    if (newBurger.length == 0) {
      return
    }

    console.log("creating new burger " + newBurger);
    //send POST request with value from textarea input
    $.ajax("api/burger/", {
      type: "POST",
      data: {name: newBurger}
    }).then(
      function() {
        location.reload();
      }
    )
  });
});