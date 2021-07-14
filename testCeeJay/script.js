const CLIENT_ID = "vbhji5hksm7chfdef01iiwmkbb8h21";
const REDIRECT_URI = "localhost:443";
const RESPONSE_TYPE = "token";
const SCOPE = "user:read:email";

/*




https://id.twitch.tv/oauth2/authorize?client_id=vbhji5hksm7chfdef01iiwmkbb8h21&redirect_uri=http://localhost:443/&response_type=token&scope=user:read:email


reponse : https://localhost/#access_token=0icq8lv19ehpt51cnfct7c10sa9ynh&scope=user%3Aread%3Aemail&token_type=bearer



*/


function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}