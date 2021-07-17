
function akanFunction(){
    
const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const fNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dob = parseInt(document.getElementById('dob').value);
var mob = parseInt(document.getElementById('mob').value);
var yob = (document.getElementById('yob').value);

var a = Math.floor((14 - mob) / 12);
var y = yob - a;
var m = mob + 12 * a - 2;

var date = (day + y + Math.floor(y / 4) - Math.floor(y / 100) 
            + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;




document.getElementById("output").innerHTML=(date);

}