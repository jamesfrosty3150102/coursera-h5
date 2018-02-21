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
              if (res.likesChineseFood) {
                message += "<link>";
              }
              else {
                message += "<link2>";
              }
              message += " --> ";
              message += res.numberOfDisplays + 1;
              message += " IOT api link";

              document.querySelector("#content")
                .innerHTML = "<h1>" + message + "</h1>";
            });
      });
  }
);





