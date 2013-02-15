function validatefields() {
	var a1 = document.information.address1.value;
	var	a2 = document.information.address2.value;
	var	city = document.information.city.value;
	var	state = document.information.state.value;
	var	zip = document.information.zipcode.value;
	var	phone = document.information.phonenumber.value;
	var	email = document.information.email.value;

	//are all fields filled in
	if (a1=="" | city=="" | state=="" | zip=="" | phone=="" |email=="") {
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
	//if all fields are correctly entered
	alert("thank you for your time");
	return true;
}