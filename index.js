
function akanFunction(){

const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const fNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var day = parseInt(document.getElementById('dob').value);
var mob = parseInt(document.getElementById('mob').value);
var yob = parseInt(document.getElementById('yob').value);
const gender = document.getElementById('gender').value;


var a = Math.floor((14 - mob) / 12);
var y = yob - a;
var m = mob + 12 * a - 2;

var date = (day + y + Math.floor(y / 4) - Math.floor(y / 100) 
            + Math.floor(yob / 400) + Math.floor((31 * m) / 12)) % 7;


if(day<=0 || day>31){
    alert("You Have Entered an Incorrect Date!")
    }
    
    else if(mob<=0 || mob>12){
    alert("Enter a valid month!")
    }
    else if(yob<1582 || yob>2020){
    alert("The Year You Entered is Invalid!")
}

if(document.getElementById("dob").value.length==0){
    alert("Enter a Valid Date");
    }
    else if(document.getElementById("mob").value.length==0){
    alert("Enter a Valid Month");
    }
    else if(document.getElementById("yob").value.length==0){
        alert("Enter a Valid Year");
}
    else if(document.getElementById("gender").value==""){
        alert("Select Your gender")
        
    }



if(gender=="Male"){
    document.getElementById("results").innerHTML=("Your Akan Name is "+mNames[date]+"♂. You were born on a "+days[date]);
}
else if(gender=="Female"){
    document.getElementById("results").innerHTML=("Your Akan Name is "+fNames[date]+"♀. You were born on a "+days[date]);
}

}