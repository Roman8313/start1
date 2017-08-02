var page=undefined;
function Onload(){
	document.addEventListener("deviceready", ondeviceReady, false);}

	function Ondeviceready(){
		document.addEventListener("backbutton", onbackKeyDown,false);
	}

function onbackkeydown(){
	alert("111");
	window.location="./about.html";
}

function msg1() {
	alert("message");
}