# IASPProject


**Importante para ejecutar:**

1. Crea un archivo llamado `.env` dentro de la carpeta `HopeSolutions/HopeSolutions` con el siguiente formato:

    ```plaintext
    DJANGO_IP=#.#.#.#
    POSTGRES_DB="nombre base de datos"
    POSTGRES_USER="nombre usuario"
    POSTGRES_PASSWORD="contraseña usuario"
    DATABASE_URL_DEV=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB}
    ```

2. Asegúrate de que Docker esté en funcionamiento en tu sistema.

3. Para ejecutar todo, utiliza el siguiente comando:

   ```bash
   bash run.sh dev -wm
