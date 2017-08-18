
var contactName = document.getElementById('contactName');
var email = document.getElementById('email');
var charcters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


var submit = document.getElementById('submit');
submit.addEventListener('click' , submition);
var form = document.getElementById('form');



function submition(event){
    if(contactName.value.length <= 0){
        event.preventDefault();
        alert('you should write your name')
    }
    else if(!charcters.test(email.value)){
        event.preventDefault();
        alert('please write a valid email')
    }else{
        var ContactData ={
        contact :contactName.value,
        emailAddress : email.value,
        };
        form.style.color ='red'
        form.style.fontSize = '3em'
        form.style.fontFamily = 'Questrial'
        form.innerHTML = "your form succesfuly submited!";
        var jasonData = JSON.stringify(ContactData);
        sendRequest(payload(jasonData));

    }
}

function sendRequest(params){
  var url = 'https://cyf-api.herokuapp.com';
  request.open('POST' , url , true);
  request.setRequestHeader( 'Content-type' , 'application/json');
  request.send(params);
}
function payload(message){
  var jason = { "message" : message };
  return JSON.stringify(jason);
}




