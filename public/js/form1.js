let email = document.getElementById("InputEmail");
let pwd = document.getElementById("InputPassword");
let cpwd = document.getElementById("cInputPassword");
let mobile = document.getElementById("InputMobile");

let emailerr = document.getElementById("emailerror");
let pwderr = document.getElementById("pwderror");
let cpwderr = document.getElementById("cpwderror");
let moberr = document.getElementById("moberror");

let regExpWeak = /^[a-z]+$/;
let regExpMedium = /^[a-zA-Z]+$/;
let regExpStrong = /^[a-zA-Z0-9]+$/;


let emailregex = /^([a-zA-Z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})$/;
let pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
let mobregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

function validatewithstrength() {

	if (!emailregex.test(email.value)) {
		emailerr.innerHTML = "Email format is Invalid.";
		emailerr.style.color = "red";
		document.getElementById("InputEmail").style.border = "solid 3px red";
		return false;
	} if (!mobregex.test(mobile.value)) {
		moberr.innerHTML = "Mobile number format is Invalid.";
		moberr.style.color = "red";
		document.getElementById("InputMobile").style.border = "solid 3px red";
		return false;

	// } else if  (String.IsNullOrEmpty(pwd.value)){
	// 	pwderr.innerHTML = "password should not be empty";
	// 	pwderr.style.color = "red";
	// 	document.getElementById("InputPassword").style.border = "solid 3px red";
	// 	return false;
	// if (String.IsNullOrEmpty(textBox1.Text))
	// {
	// 	// Do something...
	// }
	

// }  if (!pwdregex.test(pwd.value)&& (pwd.value!=cpwd.value)){
// 	pwderr.innerHTML = "password format is Invalid.It should contain minimum 8 characters including Upper case,lower case, number and special characters";
// 	pwderr.style.color = "red";
// 	document.getElementById("InputPassword").style.border = "solid 3px red";
// 	return false;



 } if (regExpWeak.test(pwd.value)|| pwd.value=="") {
		pwderr.innerHTML = "password  is weak";
		pwderr.style.color = "red";
		document.getElementById("InputPassword").style.border = "solid 3px red";
		return false;

	}  if (regExpMedium.test(pwd.value)) {
		pwderr.innerHTML = "password  is not strong";
		pwderr.style.color = "yellow";
		document.getElementById("InputPassword").style.border = "solid 3px yellow";
		return false;
	//(regExpStrong.test(pwd.value)&&
	}  if (regExpStrong.test(pwd.value)){
		pwderr.innerHTML = "password  is strong";
		pwderr.style.color = "green";
		document.getElementById("InputPassword").style.border = "solid 3px green";
	}
	if (cpwd.value==""){
		pwderr.innerHTML = "password  is strong";
		pwderr.style.color = "green";
		document.getElementById("InputPassword").style.border = "solid 3px green";
		cpwderr.innerHTML = "Confirm password required";
		cpwderr.style.color = "red";
		document.getElementById("cInputPassword").style.border = "solid 3px red";
		return false;

	}


	 if (pwd.value!=cpwd.value){
		pwderr.innerHTML = "password  is strong";
		pwderr.style.color = "green";
		document.getElementById("InputPassword").style.border = "solid 3px green";
		cpwderr.innerHTML = "passwords do not match";
		cpwderr.style.color = "red";
		document.getElementById("cInputPassword").style.border = "solid 3px red";
		return false;
// }if (pwd.value==cpwd.value){
// 	pwderr.innerHTML = "passwords are matching";
// 	pwderr.style.color = "green";
// 	document.getElementById("InputPassword").style.border = "solid 3px green";
// 	return true;
// }
}
	}
