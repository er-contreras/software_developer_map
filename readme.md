This is a project where I should implement whatever is not as built-in in the
programming language.

For example:

If the programming language doesn't have a a library to handle http request
I should implement one by my own.

Or 

If I have a problem where the browser is complaining about CORS because doesn allow 
the browser to import or export javascript files and you need a web-server to work with 
localhost, then build your own basic version of it.

## Implementations

1. Frontend of the app
2. Http web server, needed to pass CORS restriction.
3. It handles get requests.

## Make it Run

The project is Dockerized so just run:
`sudo docker-compose up`
