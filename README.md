# Sreeraj.UserReg.Server

Node JS Server registration application

## MVP1

* Create an http server that listens on port 3030
* hitting the server url should return 'hello world'

* refer : https://expressjs.com/en/starter/hello-world.html

## MVP2

* Technical Requirements
  * Save the following array of user objects in a json file inside the code repo: [{name:'Govind',age:30, isAdmin: true},{name:'Sreeraj',age:30, isAdmin: false}]
  * localhost:3030/ should return a static webpage html. (choose a random html of your choice now).
  * GET localhost:3030/api should return an api response {status:'running'}
  * GET localhost:3030/users should return the saved array of users.

* Codebase Requirements
  * server.js should only have code to start the server.
  * server.js can be better renamed to index.js/app.js
  * follow the folder structure provided inside the express doc to create files for different api routes and static html.


