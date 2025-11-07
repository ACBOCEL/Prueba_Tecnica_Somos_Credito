Proyecto Crud utilizando Node.js en el Backend, conectada a una base de datos MySQL y un Cliente FrontEnd que consume el Front End

Como ejecutar el Proyecto

1- Descargar el repositorio
2-descomprimir el archivo

Abrir en VSC el proyecto, luego en la carpeta de Backend Somos Credito crear un nuevo archivo y llamarlo .env

En el Archivo .env colocamos las siguiente variables de entorno para la conexión de MySQL (Modificar usuario y contraseña, puerto y host de ser necesarios)

DB_NAME=Prueba_Somos_Credito
DB_USER=root
DB_PASS=""
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3006

IMPORTANTE Ejcutar el Script SQL en Workbeanch que se encuentra en la carpeta database

*Luego abir una terminal hacia la ruta de "Backend Somos Credito" para ejecutar el siguiente comando

Instalar dependencia Node.js
-	npm install

Ademas instalamos todas las demas dependencias

Instalar dependencia sequelize
-	npm install express sequelize mysql2 dotenv

Instalar cors para la conexión con el Frontend
-	npm install cors

Con todo esto listo podemos ejecutar el Backend, con el sigueinte comando estando en la tura Backend Somos Credito/src

-	Node app.js

Con el Backend Corriendo podemos abrir otra instancia de VSC y abrir la carpeta de "FrontEnd Somos Credito"

Abrimos una terminal en la Raiz e ingresamos el siguiente comando para la instalación de Serve

-	npm install -g serve

Luego solo iniciamos el servidor Frontend

-	serve -s .

Listo, deberia de funcionar correctamente =D


