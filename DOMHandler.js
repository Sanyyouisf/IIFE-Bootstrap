/*variable*/
var inputName = document.getElementById("inputName"); // textbox for name
var inputAmount = document.getElementById("inputAmount"); // textbox for amount
var donateBtn = document.getElementById("donateBtn"); // Donate Button
var cancelBtn = document.getElementById("cancelBtn"); // cancel button
var myTable = document.getElementById("myTable"); //table
var userName ;
var amountData;

//event listener for the donate butoon  
donateBtn.addEventListener("click",function(event){
    donation.addData(userName,amountData);
    var donationArray = donation.getData();
    printDOM(donationArray);
    clearInput(event);
});

//fuction to clear the text box every time you click donate .
function clearInput(event){
	inputName.value="";
	inputAmount.value="";
}


//function to print the data from the private array to the DOM(table)
function printDOM(ArraySaved){
  	row = myTable.insertRow(myTable.rows.length);//create new row.
  	for (var i=0 ; i<ArraySaved.length; i++){ 
		row.innerHTML="";//to clear the table data and update it from the private array every time.
		row.insertCell(0).innerHTML= myTable.rows.length-1;
    	row.insertCell(1).innerHTML= ArraySaved[i].name;
    	row.insertCell(2).innerHTML= ArraySaved[i].amount;
	}
  };

//event listener for the name input	
inputName.addEventListener("keyup",function(event){
	userName =event.target.value
});


//event listener for the amount
inputAmount.addEventListener("keyup",function(event){
	amountData =event.target.value
});
