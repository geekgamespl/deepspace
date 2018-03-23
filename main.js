
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("servertime", function(request, response){
	
var a = (new Date()).getTime()

response.success(a.toString());
});