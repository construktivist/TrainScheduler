$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBYTDVcT2BdI7Gr9HYl80YKasP-5zPo9ks",
    authDomain: "kkelly-trainscheduler.firebaseapp.com",
    databaseURL: "https://kkelly-trainscheduler.firebaseio.com",
    storageBucket: "kkelly-trainscheduler.appspot.com",
    messagingSenderId: "139124034408"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#addTrainBtn").on("click", function(){

	var name = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var time = moment($("#trainTimeInput").val().trim(), "HH:mm").format("X");
	var frequency = $("#frequencyInput").val().trim();

	var newTrain = {
		name:  name,
		destination: destination,
		time: time,
		frequency: frequency
	};

	database.ref().push(newTrain);

	$("#addTrain").reset();

	return false;
});


	database.ref().on("child_added", function(snapshot, prevChildKey){

		console.log(snapshot.val());

		var name = snapshot.val().name;
		var destination = snapshot.val().destination;
		var time = snapshot.val().time;
		var frequency = snapshot.val().frequency;

		console.log(name);
		console.log(destination);
		console.log(time);
		console.log(frequency);

		var trainTimeFormatted = moment.unix(time).format("HH:mm");
		var nextArrival 
		console.log(trainTimeFormatted);
		var minutesAway

		$("#trainTable > tbody").append(
			"<tr><td>" + name + "</td><td>" 
			+ destination + "</td><td>" 
			+ frequency + "</td><td>" 
			+ nextArrival + "</td><td>" 
			+ minutesAway + "</td><td>");
	});

});  