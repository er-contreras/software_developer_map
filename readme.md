## SKETCH

![Untitled-2025-04-16-1127](https://github.com/user-attachments/assets/d7e4def8-8909-42e2-b7a9-2d63d308ab7d)

## TASK QUANTIFIER SYSTEM

This project quantifies and reports how much a user has done. It might sound counterintuitive ‘cause we might be used to first setting a schedule and following it until the end of the day, that way we may feel we are making progress towards our goal. It is a good way to accomplish what we have proposed to help us achieve them and what we think will make us succeed, in other words earn money and make a living. We might hold that rhythm for days, weeks or months but at the end of the day we end up making changes to our plan either we find something better to improve it or just because it is not viable anymore. So why not record all that time we have decided to spend on a task, reviewing it and keep making changes.

More humanised plan rather than the fixed one.

## Features order by priority:

Include a mental map, UML or Tree to have a big picture.

1. Users can add, delete and edit a task.
2. Users can track all the changes or progress made as a log tracker.
3. Database can keep track of the books I’ve read or follow the current chapter and if it has a project implementation to practice.
4. Users can check any topic each day so I can keep a history of all the subjects or topics I have been lost or done through the day.
5. Tasks can be set at a random time each day, not necessarily have to be the same hour at the same time.
6. Users can receive whatsapp messages through the application and response back.

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
