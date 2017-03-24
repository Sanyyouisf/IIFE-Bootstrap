/*variable*/
var inputName = document.getElementById("inputName"); // textbox for name
var inputAmount = document.getElementById("inputAmount"); // textbox for amount
var donateBtn = document.getElementById("donateBtn"); // Donate Button
var cancelBtn = document.getElementById("cancelBtn"); // cancel button
var myTable = document.getElementById("myTable"); //table
var singleAmount = document.getElementById("inlineRadio1");
var perlap = document.getElementById("inlineRadio2"); 
var userName ;
var amountData;
var typeData;

//event listener for the donate butoon  
donateBtn.addEventListener("click",function(event){
    donation.addData(userName,amountData,typeData);
    var donationArray = donation.getData();
    printDOM(donationArray);
    clearInput(event);
});

//event listener for the cancel butoon  
cancelBtn.addEventListener("click",function(event){
    clearForm(event);
    clearInput(event);
});

//fuction to clear the text box every time you click donate .
function clearInput(event){
	inputName.value="";
	inputAmount.value="";
	singleAmount.checked = false;
	perlap.checked = false;
}

// clear the form
function clearForm(event){
	userName = "";
	amountData = "";
	typeData = "";
}


//function to print the data from the private array to the DOM(table)
function printDOM(ArraySaved){
  	row = myTable.insertRow(myTable.rows.length);//create new row.
  	for (var i=0 ; i<ArraySaved.length; i++){ 
		row.innerHTML="";//to clear the table data and update it from the private array every time.
		row.insertCell(0).innerHTML= myTable.rows.length-1;
    	row.insertCell(1).innerHTML= ArraySaved[i].name;
    	row.insertCell(2).innerHTML= ArraySaved[i].amount;
    	row.insertCell(3).innerHTML= ArraySaved[i].SingleAmount;
	}
	console.log("ArraySaved",ArraySaved)
  };

//event listener for the name input	
inputName.addEventListener("keyup",function(event){
	userName =event.target.value;
});


//event listener for the amount
inputAmount.addEventListener("keyup",function(event){
	amountData = event.target.value;
});

//event lister for the singleAmount radio
singleAmount.addEventListener("change",function(event){
	console.log("radio check event ",event)
	if (event.returnValue === true){
		typeData = true;
	}
});

//event lister for the perlap radio
perlap.addEventListener("change",function(event){
	console.log("radio check event ",event)
	if (event.returnValue === true){
		typeData = false;
	}
});


