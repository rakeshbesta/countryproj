function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    xhttp.send();
    
    xhttp.onload = function() {
      if (this.status == 200 && this.readyState == 4) {
      var response = JSON.parse(this.responseText);
      for(var i=0;i<response.length;i++)
      {
          var data = response[i].name;
        //console.log(data);
        if(count != 0)
        {
        var select1 = document.getElementById("mySelect");
        var strUser = select1.options[select1.selectedIndex].value; 
        //console.log(select1.options[select1.selectedIndex].value); 
        if(strUser == response[i].name)
        {			  
                var table="<tr><th>Capital</th><th>Population</th><th>Region</th><th>3Code</th><th>Currency</th><th>Currency Symbol</th><th>Borders</th></tr>";
                table += "<tr><td>"+response[i].capital+"</td><td>"+response[i].population+"</td><td>"+response[i].region+"</td><td>"+response[i].alpha3Code+"</td><td>"+response[i].currencies[0].name+"</td><td>"+response[i].currencies[0].symbol+"</td><td>"+response[i].borders+"</td></tr>";    	  
            document.getElementById("tt").innerHTML=table;
      }
        }
        else
        {
            var select = document.getElementById("mySelect");
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(data));
            option.value = data;
            select.appendChild(option);
            //console.log(option.value);
          }
      }
      }
    }; 
  }

  var count = 0;

  function displayCapital()
  {

  count++;
  loadDoc();
  }

  loadDoc();
