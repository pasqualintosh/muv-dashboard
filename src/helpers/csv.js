let csvToJson = require("convert-csv-to-json");

let fileInputName = "./../data/trip_149.csv";
let fileOutputName = "./../data/trip_149.json";

// csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);

let json = csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .getJsonFromCsv(fileInputName);

console.log("[");
for (let i = 0; i < json.length; i++) {
  console.log(json[i]);
  console.log(",");
}
console.log("]");
