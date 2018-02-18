
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

// taking value test
  <script type="text/javascript">
   var txt;
   txt = document.getElementById('txta').value; //获取textarea的值
  document.write (txt);
   document.getElementById('txta').value = "txt2";  //设置textarea的值
</script>
