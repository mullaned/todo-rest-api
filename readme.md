# Todo List App

This todo list app is made using a node/Mongo back-end for the API and a front-end that will send the ajax requests to the different endpoints to update the API.

## Front End:
Simple form layout, on page load the current list of todos are retrieved from the API using the get endpoint.  The user can type their todo in the text field.  On 'enter' keypress the input text is sent to the post endpoint creating a new todo.  The text is removed from the input and on response from the API the todo is added to the ul list.

When a li is clicked the completed status is toggled true/false.  A put request is sent updating the completed status of the todo.

When the red 'X' is clicked on a li the request is sent to the delete endpoint for that todo based on its id.  The todo is then removed from the list.


## Back-End
This node app uses the express framework and a Mongo Atlas database.  Mongoose is used to setup the schema.
Endpoints are configured for GET, POST, PUT and DELETE.
GET will return the JSON file for the todos
POST will handle adding a new todo
PUT will handle updating a specific todo
DELETE will handle removing a specific todo