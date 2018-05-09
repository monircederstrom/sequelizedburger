
    $(document).ready(function () {
        $("#eat").on("click", function(event) {
          event.preventDefault();
          var id = $(this).data("data-burgerid");
          console.log(id)
          // Send the  request.
          $.ajax("/burgers/" + id, {
            type: "PUT",
            data: {
              devoured: true
            }
          }).then(
            function() {
              console.log("Burger eaten!");
              // Reload the page to get the updated list
              location.reload();
            });
        });
        $("#createburg").on("click", function(event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          var newBurger = $("#burgerinput").val();
         
                    // Send the POST request.
                    $.ajax("/burgers/create", {
                      type: "POST",
                      data: {
                          b_name: newBurger
                      }
                    }).then(
                      function() {
                        console.log("added new burger");
                        // Reload the page to get the updated list
                        location.reload();
                      });
          });
        });
      