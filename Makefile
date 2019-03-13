build-image:
	docker-compose build

start:
	docker-compose up

lint:
	yarn lint

build:
	yarn build

deploy:
	yarn deploy