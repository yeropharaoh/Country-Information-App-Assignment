function filereader (filename, callback){

var fs = require('fs');

fs.readFile(filename, function (err, data){
	if (err) {
		throw err; 
   }
	
 var info = JSON.parse(data);

callback(info);

})

};


// for (i=0; i<text.length; i++){
// 	if (country === info[i].name){
// 		console.log("Country: " + info[i].name);
// 		console.log("Top Level Domain: " + info[i].topLevelDomain);
// 	}
// }

module.exports = {
	filereader: filereader
};

