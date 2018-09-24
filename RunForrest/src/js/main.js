fetch("https://api.myjson.com/bins/uptto")
.then(Response => Response.json())
.then(function(json) {
    var templateX = document.getElementById('template').innerHTML;
    var output = Mustache.render(templateX, json);
    document.getElementById('agents').innerHTML = output;
}).catch(function (err){
    console.log(err);
});