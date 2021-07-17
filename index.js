
function akanFunction(){

const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const fNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var day = parseInt(document.getElementById('dob').value);
var mob = parseInt(document.getElementById('mob').value);
var yob = parseInt(document.getElementById('yob').value);
const male = document.getElementById('male').value;
const female = document.getElementById('female').value;

var a = Math.floor((14 - mob) / 12);
var y = yob - a;
var m = mob + 12 * a - 2;

var date = (day + y + Math.floor(y / 4) - Math.floor(y / 100) 
            + Math.floor(yob / 400) + Math.floor((31 * m) / 12)) % 7;

if(day<=0 || day>31){
    alert("incorrect date")
}
else if(mob<=0 || mob>12){
    alert("Enter a valid month")
}




}