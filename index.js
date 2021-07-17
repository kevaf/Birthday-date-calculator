var name = document.getElementById('name').value
var dob = parseInt(document.getElementById('dob').value);
var mob = parseInt(document.getElementById('mob').value);
var yob = (document.getElementById('yob').value);
var yy = parseInt(yob.slice(2,4));

var century = toString(yob);
var cc = parseInt(century.slice(0,3));



var date = (((cc/4)-2*cc-1)+(5*yy/4)+(26*(mob+1)/10)+dob)%7;