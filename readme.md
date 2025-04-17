![task-done](https://github.com/user-attachments/assets/4a3536e8-2a2e-48e3-b8c2-5b7463b42d82)

This is a project where I should implement whatever is not as built-in in the
programming language.

For example:

If the programming language doesn't have a a library to handle http request
I should implement one by my own.

Or 

If I have a problem where the browser is complaining about CORS because doesn allow 
the browser to import or export javascript files and you need a web-server to work with 
localhost, then build your own basic version of it.

## App Components

1. Frontend - JavaScript - HTML - CSS 
2. Http Web Server - Ruby
3. Database - PostgreSQL

## Make it Run

The project is Dockerized so just run:
`sudo docker-compose up`

## Domain and ports

I had to change the host IP address of the app in the compose.yaml file to:

`127.0.0.1:3000:3000`

This way we can avoid CORS error.

The http_server keeps the tcp connection to `0.0.0.0:3000` this means that it takes whatever connection
reaches the server within its container's network namespace on port 3000.

The frontend AJAX POST request stays the same `http://127.0.0.1:3000/post` this hits the port 3000 on
the 127.0.0.1 interface of your Docker host machine. Docker, due to the port mapping you 
defined (127.0.0.1:3000:3000), forwards this traffic to port 3000 inside your http_server container
