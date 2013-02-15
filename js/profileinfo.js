function validate() {
	var a1 = document.getElementById("address1").value;
	var	a2 = document.getElementById("address2").value;
	var	city = document.getElementById("city").value;
	var	state = document.getElementById("state").value;
	var	zip = document.getElementById("zipcode").value;
	var	phone = document.getElementById("phone number").value;
	var	email = document.getElementById("email").value;

	//are all fields filled in
	if (a1=="" city=="" state=="" zip=="" phone=="" email=="") {
		alert("Please enter a value for fields with *");
		console.log("Nothing was entered")
		return false;	
	}

	//are the fields correctly entered
	if (zip.length<5) {
		alert("This is not a valid zipcode");
		return false;
	}
	//check phone
	if (phone.length > 10) {
		alert("This is not a valid phone number");
		return false;
	}

	alert("thank you for your time");
	return true;
}