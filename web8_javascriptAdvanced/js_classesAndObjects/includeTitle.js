/*
url = window.location.pathname;
document.write(url.substring(url.lastIndexOf('_')+1));
var str = new String();
str = url.substring(url.lastIndexOf('_')+1);
str = str.slice(0,-5);
document.write(str);
var old = new String();
old = getElementsByTagName("title").innerHTML
document.getElementsByTagName("title").innerHTML = old + str;
*/
title = document.title.toUpperCase().bold();
document.write("TOPIC: ",title,"<br><hr>");