# RandomNumber
Random Number Gen Microservice

The following microservice is developed to help programs/applications request a random number to be generated within a specific range. The following are instructions on how to request/receive data from the microservice.

Firstly, the microservice is developed with Node.js to run as a persistent server, additionally the Express framework is utilized to handle all HTTP routing requests/responses (RESTful API). 

To run the microservice simply download/clone all files in the repo --> within the server.mjs, change the PORT variable to an open port number if neccesary --> finally, launch the server by typing "node server.mjs" in the terminal.

Requesting Data (A Random Number Within Range(0, X)): Once the Node.js server is up and running on an open port, client applications can send a HTTP POST method request to the following routing: "/randomnumber". Within the POST`s request body the client application should send in JSON format a key titled "range" (String) followed by a value (integer) representing the ending range/max value the random number can be picked from. The following image below is an example call that can be made using the REST Client tool in visual studio code (test file in repo as well):

Send-to-server.rest example call
#####

Recieving Data (Random Number from Microservice): After the Node.js server recieves a valid POST request body, it will then take the specified ending range and generate a random number within that range using JavaScripts built-in Math functions. The generated random number will then be converted to string format (so that client applications can use the number as a string in other external API calls) and returned to the client as a response in JSON format. The response in JSON will be in the following format: key - "randomnumber" : value - "randomNumberText", clients can simply access value to retreive the random number requested! The following below is an example response that expected from the microservice:

response from Send-to_server example call:
####




