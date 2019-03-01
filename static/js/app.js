// from data.js
var tableData = data;

// YOUR CODE HERE!


// TEST DATA
// TEST DATA
// TEST DATA
// TEST DATA
// TEST DATA
// TEST DATA
// TEST DATA

// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },
//   {
//     datetime: "1/1/2010",
//     city: "bonita",
//     state: "ca",
//     country: "us",
//     shape: "light",
//     durationMinutes: "13 minutes",
//     comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
//   },
//   {
//     datetime: "3/2/2016",
//     city: "el cajon",
//     state: "ca",
//     country: "us",
//     shape: "triangle",
//     durationMinutes: "6 minutes",
//     comments: "On New Years Eve I went outside to hear the celebration and fireworks in my neighbor hood. And noticed 3 red lights above my house and"
//   }
// ];



// let's make some varables and arrays
// requestedRecord array will hold the records that the request returns
var requestedRecord = [];
//  dateAsk is the varable that we will replace with the imput from the site (it is jsut for testing right now)
// var dateAsk = ("1/6/2010");
var dateAsk = ("1/1/2010");
// console.log(dateAsk);

// start the counter
for (var i = 0; i < data.length; i++) {
    var count = data[i];
    // console.log(count);

  // Add each matching date to the requestedRecord data
  if (count.datetime == dateAsk) {
    requestedRecord.push(data[i]);
  }
  else {}
// console.log(data.datetime);
}



// Let's test it
console.log(`The date you requested is ${dateAsk}.`);
// console.log(requestedRecord);

console.log(`Your request returned ${requestedRecord.length} results`);
// console.log(requestedRecord);

console.log(`On ${dateAsk} the folowing ${requestedRecord.length} occurences happened.`)

// requestedRecord.forEach(function(requestedRecordLine) {
//     console.log(requestedRecordLine);
//   });

  requestedRecord.forEach(function(requestedRecordLine) {
    console.log(`In ${requestedRecordLine.city}, ${requestedRecordLine.state}, ${requestedRecordLine.country} a ${requestedRecordLine.shape} UFO appeared for ${requestedRecordLine.durationMinutes}. ${requestedRecordLine.comments}`);
  });

// datetime: "3/2/2016",
// //     city: "el cajon",
// //     state: "ca",
// //     country: "us",
// //     shape: "triangle",
// //     durationMinutes: "6 minutes",
// //     comments: 

// date/time`, `city`, `state`, `country`, `shape`, and `comment`