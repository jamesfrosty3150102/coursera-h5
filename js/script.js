// adding textbox
//var x = document.getElementById("myTextarea");
<textarea rows="4" cols="50">
  Please adding value for plotting IoT diagram... 
</textarea>


// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              message += res.numberOfDisplays + 1;

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);





