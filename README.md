# expressjs-api-explorer
Expressjs api explorer is an API Explorer module of expressJS where you can see all the registered api's of express also with the middleware attached. You can see the route method type and more

#Install
Insert this code in your app.js after registering all routes
	//Params app  is the instance of app = express();
	//Param express is passing argument as callback;
	require('expressjs-api-explorer')(app,express);
