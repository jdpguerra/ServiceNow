
//Random password:
function password(){ 		
		var newpw = "";
		var availablechars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
		for (var x = 0; x < 8; x++) {
			randomNumber = Math.floor(Math.random() * availablechars.length);
			newpw += availablechars[randomNumber];
		}	
		return newpw;
	}
	var passowrd = password();
	current.user_password(passowrd);
	current.password_needs_reset = true;
	gs.eventQueue("New-employee",current,current.email,passowrd);