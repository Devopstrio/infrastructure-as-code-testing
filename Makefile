.PHONY: help build up down test lint migrate validate-iac check-policy detect-drift

help:
	@echo "IaC Testing Platform - Management Commands"
	@echo "----------------------------------------"
	@echo "build         : Build all containers"
	@echo "up            : Start all services"
	@echo "down          : Stop all services"
	@echo "test          : Run all tests"
	@echo "lint          : Run linting checks"
	@echo "migrate       : Run database migrations"
	@echo "validate-iac  : Run security scan on local Terraform"
	@echo "check-policy  : Validate OPA policies against plan"
	@echo "detect-drift  : Compare live infra with state"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

validate-iac:
	docker-compose exec api python scripts/validate/terraform_scan.py

check-policy:
	docker-compose exec api python scripts/validate/opa_check.py

detect-drift:
	docker-compose exec api python scripts/drift/check_all.py
