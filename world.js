window.onload = function()
{
    var search = document.getElementById("lookup");
    search.addEventListener("click", function(event)
    {
        event.preventDefault();
        var url ="";
        var t = document.getElementById("country").value;
        var a = new XMLHttpRequest();
        a.onreadystatechange = b;
        var r = document.getElementById("search");
        
        if(r.checked)
        {
              url = "world.php?all=true";
        }
        else if(t == "")
        {
            alert(t);
            document.getElementById("result").innerHTML = "Enter a text value";
        }
        else
        {
            url = "world.php?country="+document.getElementById("country").value;
        }
            a.open("Get", url);
            a.send();
            
            function b()
            {
                if(a.readyState === XMLHttpRequest.DONE)
                {
                    if(a.status === 200)
                    {
                        var s = a.responseText;
                        document.getElementById("result").innerHTML = s;
                    }
                }
            }
        
    });
};