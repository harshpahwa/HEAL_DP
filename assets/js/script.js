
var firebaseConfig = {
    apiKey: "AIzaSyCydD6VhxOcMTMn1dLq9eFTo_sLeLjga7g",
    authDomain: "toggle-button-2d6e1.firebaseapp.com",
    databaseURL: "https://toggle-button-2d6e1-default-rtdb.firebaseio.com",
    projectId: "toggle-button-2d6e1",
    storageBucket: "toggle-button-2d6e1.appspot.com",
    messagingSenderId: "1022924564079",
    appId: "1:1022924564079:web:3958795699596cf017cf9a",
    measurementId: "G-Z5SG6B16KS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var A;
	var B;
	var C;
	var D;
	database.ref().on("value", function(snap){
		A = snap.val().A;
		B = snap.val().B;
		C= snap.val().C;
		D = snap.val().D;
		if(A == "ON"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(B == "ON"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(C== "ON"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(D == "ON"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("A");
		if(A == "ON"){
			firebaseRef.set("OFF");
			A = "OFF";
		} else {
			firebaseRef.set("ON");
			A = "ON";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("B");
		if(B == "ON"){
			firebaseRef.set("OFF");
			B = "OFF";
		} else {
			firebaseRef.set("ON");
			B = "ON";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("C");
		if(C== "ON"){
			firebaseRef.set("OFF");
			C= "OFF";
		} else {
			firebaseRef.set("ON");
			C= "ON";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("D");
		if(D == "ON"){
			firebaseRef.set("OFF");
			D = "OFF";
		} else {
			firebaseRef.set("ON");
			D = "ON";
		}
	})
});