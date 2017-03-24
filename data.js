 
var donation =(function (data){

 	//private array the have the donor information
 	var customerData =[];// create a private empty array of objects.

 	//function to add the data from the text input
 	// to creat an object and push this object to the private array (setter).
 	data.addData = function(name,amount,type){
 		var newData = { };
 		newData.name = name;
 		newData.amount = amount;
 		newData.SingleAmount = type;
 		customerData.push(newData);
 	}
	//function return the array to the DOM(getter).
 	data.getData= function(){
 		return customerData;
 	}
 	data.deleteData = function(name,amount,type){
 		var newData = { };
 		newData.name = "";
 		newData.amount = "";
 		newData.SingleAmount = "";
 		customerData.slice(newData);
 	}
 	
 	return data;
 }) ( donation ||{});



 