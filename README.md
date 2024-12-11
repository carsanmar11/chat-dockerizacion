# Estado Actual

- **Backend**: Funciona correctamente, conectado a MongoDB.
- **Frontend**: Configurado con Vite, pero persisten problemas de comunicación con el backend IMPORTANTES: llegan las APIs pero no las procesan bien por eso salen errores de POST ERROR y GET ERROR, según ChatGPT se debe a que estan mal configuradas las rutas del backend pero a priori estan bien.
- **MongoDB**: Contenedor funcional con las bases de datos CARGADAS ya correctamente y diseñada como VOLUMEN PERMANENTE es decir que si tiras los contenedores la base de datos se mantiene (definida en el docker-compose.yml).

## Problemas Pendientes -- POSIBLES
1. Revisión del proxy configurado en `vite.config.js`.
2. Verificación de las rutas del backend para los endpoints de registro y login.

## Cómo Levantar el Proyecto
1. Clona este repositorio

2. Instala wsl el bash de Linux para ejecutar la aplicación

3. Tener Instalado Docker Desktop

4. Comandos:
    - docker-compose up --build -d (levanta el escenario por primera vez)
    - docker-compose up -d (levanta el escenario)
    - docker-compose down (tira el escenario)

5. Comandos útiles:
    - docker logs <ID-CONTAINER> (para ver los logs y depurar)
    - docker exec -it <ID-CONTAINER> bash (para acceder a la consola del contenedor y hacer peticiones curl para verificar conectividad)
    - docker ps (ver el estado de contenedores)