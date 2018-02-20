<!DOCTYPE html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://jamesfrosty3150102.github.io/coursera-h5/index.html"></script>
  <script language="javascript" type="text/javascript">
                var scrt_var = 25; 
                openPage = function() {
                location.href = "http://api.thingspeak.com/update?key=D6TS14SPWILON2WU&field1="+scrt_var;}
  </script> 
<head>
</head>
  <body>
    <form action="https://jamesfrosty3150102.github.io/coursera-h5/index.html" method="get">
       your txtfirstname:  $_GET[txtfirstname]; <br />
       your lblfirstname:  $_GET[lblfirstname]; <br />
    </form>    
       <button onclick="show()">
            lblfirstname
       </button>
       sending iot <a href ="javascript:openPage()">link </a>
    

 </body>
</html>

