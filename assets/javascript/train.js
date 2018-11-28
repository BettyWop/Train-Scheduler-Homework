
  var config = {
    apiKey: "AIzaSyATLZwbl2X0PyTIMAa8SX47klMTDWraZTo",
    authDomain: "train-game-21174.firebaseapp.com",
    databaseURL: "https://train-game-21174.firebaseio.com",
    projectId: "train-game-21174",
    storageBucket: "train-game-21174.appspot.com",
    messagingSenderId: "714822021861"
  };
  firebase.initializeApp(config);


var database = firebase.database();
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#inputTrain").val().trim();
    var trainDestination = $("#inputDestination").val().trim();
    var trainTime = moment($("#inputFirstTrainTime").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#inputFrequency").val().trim();

    var newTrain = {
        tName: trainName,
        tDestination: trainDestination,
        tTime: trainTime,
        tFrequency: trainFrequency,
    };

    database.ref().push(newTrain);

    $("#inputTrain").val("");
    $("#inputDestination").val("");
    $("#inputFirstTrainTime").val("");
    $("#inputFrequency").val("");


    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().tName;
        var trainDestination = childSnapshot.val().tDestination;
        var trainTime = childSnapshot.val().tTime;
        var trainFrequency = childSnapshot.val().tFrequency;

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);
    })
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainTime),
        $("<td>").text(trainFrequency),
    );

    $("#train-table > tbody").append(newRow);
});

//dont really understand the "moment" portion and how to get the minutes away. Stuck here :/
var randomFormat = "HH:mm";
var convertedTime = moment(randomFormat);

var hours = parseInt(diff.asHours());

hours = hours - days * 24;

var minutes = parseInt(diff.asMinutes());

minutes = minutes - (days * 24 * 60 + hours * 60);

