const USER_PROFILE_URL = "https://api.github.com/users/";
var myUserName = "torvalds";

function fillTemplateWithUserData(data){
	$('#gitHubAvatar').attr("src", data.avatar_url);
	$('#gitHubUser').text(data.name + ' ' + data.login);
	$('#gitHubLocation').text(data.location);
}

function fillTemplateWithDefaultData(XMLHttpRequest, textStatus, errorThrown){
	$('#gitHubAvatar').attr("src", 'assets/default-avatar.png');
	$('#gitHubUser').text('_Name_ _UserName_');
	$('#gitHubLocation').text('Frikilandia');
	console.log(textStatus);
	console.log(errorThrown);
	console.log(XMLHttpRequest.responseText);
}

$.ajax({
	type: 'GET',
	url: USER_PROFILE_URL + myUserName,
	timeout: 5000,
	success: fillTemplateWithUserData,
	error: fillTemplateWithDefaultData
})
