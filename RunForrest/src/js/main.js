function validate(e) {
    if (e.keyCode===13) callPromise();
 }

 function callPromise(){
    fetch("https://api.myjson.com/bins/uptto")
    .then(Response => Response.json())
    .then(function(json) {
        var templateX = document.getElementById('template').innerHTML;
        var input = document.getElementsByName("inpuSearch")[0].value;
 
    if(input){
        console.log(json);
        var filterCompanies = {}
        filterCompanies.companies= json.companies.filter(function (el){
            return el.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        });
        console.log(filterCompanies);
        var output = Mustache.render(templateX,filterCompanies);
    }
    else{
        var output = Mustache.render(templateX, json);
    }
    document.getElementById('agents').innerHTML = output;
        
    }).catch(function (err){
        console.log(err);
    });
 }

