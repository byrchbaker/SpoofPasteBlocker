// content.js
var bodyElement = document.getElementsByTagName("body")[0].innerHTML; 

var headElement = document.getElementsByTagName("head")[0].innerHTML; 

var alreadyAlert = null

if(bodyElement.indexOf("clipboardData.setData")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
    alreadyAlert += 1
}

if(headElement.indexOf("clipboardData.setData")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
    if (alreadyAlert.indexOf("1")>=0) {
    } else {
     alreadyAlert += 1
    }
}

if(bodyElement.indexOf("clipboard.writeText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
     if (alreadyAlert.indexOf("1")>=0) {
    } else {
     alreadyAlert += 1
    }
}

if(headElement.indexOf("clipboard.writeText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
     if (alreadyAlert.indexOf("1")>=0) {
    } else {
     alreadyAlert += 1
    }
}

if(bodyElement.indexOf("clipboard.readText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
     if (alreadyAlert.indexOf("1")>=0) {
    } else {
     alreadyAlert += 1
    }
}

if(headElement.indexOf("clipboard.readText")>=0){
    alert("There is a potential copy and paste spoofing on this website. Be careful!");
     if (alreadyAlert.indexOf("1")>=0) {
    } else {
     alreadyAlert += 1
    }
}
