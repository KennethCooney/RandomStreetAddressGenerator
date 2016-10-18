
var streetNumber = ['120','28','122','16','37'];
var streetName = ['Holmes','Sidlaw','Cocasset','Beechwood','Meagher'];
var streetType = ['Street', 'Avenue','Drive','Road','Circle'];
var cityName = ['Quincy','Boston','Foxboro','Westport','Milton'];
var stateName = ['Massachusetts','Connecticut','California','Hawaii','Maine'];
var zipcode = ['02171','06880','41389','90210','02132'];


var newString = streetNumber[Math.round(Math.random()*4)] 
+ ' ' + streetName[Math.round(Math.random()*4)] 
+ ' ' + streetType[Math.round(Math.random()*4)] 
+ ' ' +  cityName[Math.round(Math.random()*4)] + ', ' 
+ stateName[Math.round(Math.random()*4)] + ' ' 
+ zipcode[Math.round(Math.random()*4)];
console.log(newString);


alert('hello');