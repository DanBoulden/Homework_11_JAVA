// from data.js
var tableData = data;

// YOUR CODE HERE!
// setup the tbody
var tbody = d3.select("tbody");

// // This was my code for pulling the records from the input date before the 3rd class (IE before D3)
// // This was my code for pulling the records from the input date before the 3rd class (IE before D3)
// // This was my code for pulling the records from the input date before the 3rd class (IE before D3)
// // This was my code for pulling the records from the input date before the 3rd class (IE before D3)
// // let's make some varables and arrays
// // requestedRecord array will hold the records that the request returns
// var requestedRecord = [];
// //  dateAsk is the varable that we will replace with the imput from the site (it is jsut for testing right now)
// // var dateAsk = ("1/6/2010");
// var dateAsk = ("1/1/2010");
// // console.log(dateAsk);

// // start the counter
// for (var i = 0; i < data.length; i++) {
//     var count = data[i];
//     // console.log(count);

//   // Add each matching date to the requestedRecord data
//   if (count.datetime == dateAsk) {
//     requestedRecord.push(data[i]);
//   }
//   else {}
// // console.log(data.datetime);
// }


// This was my testing code before the 3rd class (IE before D3)
// This was my testing code before the 3rd class (IE before D3)
// This was my testing code before the 3rd class (IE before D3)
// This was my testing code before the 3rd class (IE before D3)
// // Let's test it
// console.log(`The date you requested is ${dateAsk}.`);
// // console.log(requestedRecord);

// console.log(`Your request returned ${requestedRecord.length} results`);
// // console.log(requestedRecord);

// console.log(`On ${dateAsk} the folowing ${requestedRecord.length} occurences happened.`)

// // requestedRecord.forEach(function(requestedRecordLine) {
// //     console.log(requestedRecordLine);
// //   });

//   requestedRecord.forEach(function(requestedRecordLine) {
//     console.log(`In ${requestedRecordLine.city}, ${requestedRecordLine.state}, ${requestedRecordLine.country} a ${requestedRecordLine.shape} UFO appeared for ${requestedRecordLine.durationMinutes}. ${requestedRecordLine.comments}`);
//   });


// Select the submit button
var submit = d3.select("#submit");



submit.on("click", function() {
  // Prevent the page from refreshing
  d3.selectAll("svg > *").remove();
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue);

  console.log(filteredData);
  // tableData
  filteredData.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  d3.selectAll("svg > *").remove();
});




// datetime: "3/2/2016",
// //     city: "el cajon",
// //     state: "ca",
// //     country: "us",
// //     shape: "triangle",
// //     durationMinutes: "6 minutes",
// //     comments: 

// date/time`, `city`, `state`, `country`, `shape`, and `comment`