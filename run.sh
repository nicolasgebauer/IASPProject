#!/bin/bash

if [ -f "HopeSolutions/.env" ]; then
  source "HopeSolutions/.env"
else
  echo "HopeSolutions/.env file missing"
  exit 1
fi

case $1 in
  prod)
    echo "Starting production containers..."
    exit 1
    ;;
  dev)
    echo "Starting development containers..."
    docker compose up --build -d
    docker exec iaps-postgres-dev sh -c \
      "echo 'CREATE POSTGRES DATABASE' &&
      psql -U postgres -c 'CREATE DATABASE $POSTGRES_DB'"

    if [ "$2" = "--withmigrations" -o "$2" = "-wm" ]; then
      docker exec iaps-backend-dev sh -c \
        "echo 'MAKEMIGRATIONS' &&
        python manage.py makemigrations && 
        echo 'MIGRATE' &&
        python manage.py migrate && 
        echo 'RUNSERVER' &&
        python manage.py runserver $DJANGO_IP:8000"
    elif [ -z "$2" ]; then
      echo ""
    else
      echo "Error: Unrecognized arguments. Options are: --withmigrations or -wm"
    fi
    exit 1
    ;;  
  *)
    echo "Error: Unrecognized command. Only argument is 'dev' or 'prod'"
    exit 1
    ;;
esac
