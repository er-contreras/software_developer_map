up:
	sudo docker-compose up
down:
	sudo docker-compose down
build:
	sudo docker-compose build
server:
	sudo docker-compose run --rm app ruby web_server.rb
