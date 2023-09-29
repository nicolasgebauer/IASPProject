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
    # Aquí deberías agregar los comandos necesarios para iniciar tus contenedores en producción
    exit 0
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
        python manage.py makemigrations --noinput && 
        echo 'MIGRATE' &&
        python manage.py migrate && 

        echo -e \"RUNNING BACKEND ON \e[4mhttp://$DJANGO_IP:$DJANGO_PORT\e[24m\" &&
        python manage.py runserver $DJANGO_IP:$DJANGO_PORT"
        
    elif [ -z "$2" ]; then
      echo "Running without migrations"
    else
      echo "Error: Unrecognized arguments. Options are: --withmigrations or -wm"
      exit 1
    fi
    exit 0
    ;;  
  *)
    echo "Error: Unrecognized command. Only arguments are 'dev' or 'prod'"
    exit 1
    ;;
esac
