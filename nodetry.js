var readany = require('./json_file_reader');
var country = process.argv[2];
// var fs = require('fs');

// fs.readFile('./countries.json', function (err, data){
// 	if (err) {
// 		throw err; 
//    }
	
// var info = JSON.parse(data);

readany.filereader('countries.json', function (info) {	
for (i=0; i<info.length; i++){
	if (country === info[i].name){
		console.log("Country: " + info[i].name + '\n' + "Top Level Domain: " + info[i].topLevelDomain);
		}
	}
});








// console.log(text[0].name);
// console.log(text[0].topLevelDomain);
// console.log(country);
// });