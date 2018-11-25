#Eat The Burger
---
###Purpose:
Eat The Burger is an example full stack web application with simplified functionality. The stack includes a mySQL database backend, node.js server-side code, express.js to build an api with the handlebars rendering engine to serve templated webpages to the front end. A MVC architecture is used to organize the code.

###Installation
1. Run npm install in the primary directory to install all node dependencies from package.json file.
    - express
    - express-handlebars
    - mysql
    - nodemon

2. Set up your mysql database and seed the data by running schema.sql and seeds.sql found in primary directory.

###Functionality
On load you will be presented with 3 uneaten burgers, each with their own button to choose to eat. Upon selecting to eat an item, the PUT request will be sent with the Id and the database will update the status then refresh the page.

You may also add an item to the database and have it rendered by using the text input and submission buttons.