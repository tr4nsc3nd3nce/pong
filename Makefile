all: build up

VOLUMES = docker volume ls -q
DB=pong_docker-nest-postgres
PG=pong_pgadmin
REDIS=pong_redis

build:
	@docker compose -f docker-compose.yml build

volumes:
	@docker volume ls -q

rmvol:
	@docker volume rm $(DB) $(PG) $(REDIS)

up:
	@docker compose -f docker-compose.yml up -d

down:
	@docker compose -f docker-compose.yml down

debug: build
	@docker compose -f docker-compose.yml up

stop:
	@docker compose -f docker-compose.yml stop

prune:
	@docker system prune -a

re: stop up

rebuild: stop down build up
	@docker ps
clean: stop down

.PHONY: all build up down debug stop clean
