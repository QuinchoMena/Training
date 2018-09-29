const URL_JSON = "https://api.myjson.com/bins/uptto";

var validate = e => {
    if (e.keyCode===13) {
        callPromise();
    }
 }

 function callPromise(){
    fetch(URL_JSON)
    .then(Response => Response.json())
    .then(json => {
        var input = document.getElementsByName("inpuSearch")[0].value;
        
        if(input){
            var filterCompanies = {}
            filterCompanies.companies= json.companies.filter((filter) => {
                return filter.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
            });
            var output = Mustache.render(TEMPLATE,filterCompanies);
        }
        else{
            var output = Mustache.render(TEMPLATE, json);
        }
        document.getElementById('agents').innerHTML = output;
        
    }).catch(function (err){
        console.log(err);
    });
 }
 
 document.getElementById("page").onload =  function loadPage(event) {
    callPromise();
  };
  
  document.getElementById("searchBar__icon").onclick =  function lupePressed(event) {
    callPromise();
  };

  document.getElementById("searchBar__title").onkeypress =  function inputEnter(event) {
    validate(event);
  };

