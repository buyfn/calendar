build-image:
	docker-compose build

start:
	docker-compose up

lint:
	yarn lint

deploy:
	yarn deploy