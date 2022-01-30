// content.js
var bodyElement = document.getElementsByTagName("body")[0].innerHTML; 

var headElement = document.getElementsByTagName("head")[0].innerHTML; 


if(bodyElement.indexOf("clipboardData.setData")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}

if(headElement.indexOf("clipboardData.setData")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}

if(bodyElement.indexOf("clipboard.writeText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}

if(headElement.indexOf("clipboard.writeText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}

if(bodyElement.indexOf("clipboard.readText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}

if(headElement.indexOf("clipboard.readText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
}