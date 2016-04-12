var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json')
//AWS.config.update({region:'us-west-2b'});
var task =  function(request, callback){
var params = {
	  DryRun:  false,
	  MaxResults: 5
	};
var ec2 = new AWS.EC2();
ec2.describeInstances(params, function(err, data) {
	  if (err) callback(null, err.stack); // an error occurred
	  else     callback(null,data);           // successful response
	});
}

exports.lab = task
