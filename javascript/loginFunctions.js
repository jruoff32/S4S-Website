

Parse.initialize("K40VukCFHAYTkwJBTkH6XEOuoi8s7E37VkvXhh2W", "0GljuGBEoXKWFGqzWsaldPcK60lhdV0krPpwaxqP");
var currentUser = Parse.User.current();	//get current user if there
var remember = false;	//by default, do not remember the login
//NOTE: MAY NEED TO CHANGE THIS BECAUSE IT WAY BE RESET REMEMBER EVERYTIME

if( currentUser )
{
	//user is logged in so they go right to homepage
}

else
{
	//show the login page
}

function signUpUser()	//signs up user
{
	

	var user = new Parse.User();	//creates the user object
	//sets all the user values up from the form
	user.set( "email", document.getElementById( "inputEmail" ).value );
	user.set( "username", document.getElementById( "inputEmail" ).value );
	user.set( "password", "password" );
	user.set( "name", document.getElementById( "inputFullName" ).value );
	
	
	
	user.signUp(null, {
		success: function( user ) {
			alert( "Welcome to Students for Startups!" );
			
		},
		error: function( user, error ) 
		{
			alert( "Error: " + error.code + " " + error.message );
		}
	});//end user.signUp
}
			







