<div id="textDiv">  
    <div id="nested"></div>  
</div>  
<script type="text/javascript">  
    var div = document.getElementById("textDiv");  
    var nestedDiv = document.getElementById("nested");  
    nestedDiv.textContent = "nested";  

    var text = "[" + div.textContent + "]";  
</script>  
