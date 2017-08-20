const express = require('express');
const request = require('request'); // "Request" library
const querystring=require('querystring');
const cookieParser=require('cookie-parser');
const httpProxy=require('http-proxy');


const router = express.Router();

const clientId="990908af7650443799342f406c37de12";
const clientSecret="a4486f82c3174d3bb9c66fa4cf910c3d";
const redirect_uri="http://localhost:3000/callback";

const apiForwardUrl='https://accounts.spotify.com/authorize?'+"client_id="+clientId+"&client_secret="+clientSecret+"&redirect_uri="+redirect_uri;

var apiProxy=httpProxy.createProxyServer({hostRewrite:true,autoRewrite:true}).listen(3001);


/**
 * Generates a random string containing numbers and letter	s
 * @param  {number} length The length of the string
 * @return {string} The generated string (for the state)
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var stateKey = 'spotify_auth_state';

router.get('/login',function(req,res,next){
	console.log("login called");
    console.log(apiForwardUrl);
	var state=generateRandomString(16);
	res.cookie(stateKey, state);
	var scope = 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private ugc-image-upload user-follow-read user-library-read user-read-private user-top-read streaming';
	apiProxy.web(req,res,{target:apiForwardUrl,changeOrigin:true,hostRewrite:true});
    apiProxy.on('proxyRes', function (proxyRes, req, res) {

    });

});

router.get('/callback',function(req,res){
	console.log("callback called");
	var code = req.query.code||null;
	var state =req.query.state||null;
	var storedState=req.cookies?req.cookies[stateKey]:null;
	if(state==null||state!==storedState){
		res.redirect("/#"+querystring.stringify({error:"state_mismatch"}));
	}else{
		res.clearCookie(stateKey);
		var authOptions={
			url:'https://accounts.spotify.com/api/token',
			form:{
				code:code,
				redirect_uri: redirect_uri,
				grant_type:"authorization_code"
			},
			headers:{
				'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
			},
			json:true
		};
	request.post(authOptions,function(error,response,body){
		if(!error&&response.statusCode==200){
			var access_token=body.access_token,
				refresh_token=body.refresh_token;

			var options={
				url: "http://api.spotify.com/v1/me",
				headers:{"Authorization":"Bearer"+access_token},
				json:true
			};

			request.get(options,function(error,response,body){
				console.log(body);
			});
			res.redirect('/#'+querystring.stringify({
				access_token: access_token,
				refresh_token: refresh_token
			}));
		} else{
			res.redirect('/#'+
				querystring.stringify({
					error:"invalid_token"
				}));
		}
	});
	}
});

router.get('/lol',function(req,res,next){
	console.log("lol called");
	return res.status(200).json({
		title:"haa",
		error:"lol"
	});
});

//Allows other files to access the router
module.exports = router;
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
