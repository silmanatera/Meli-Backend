Este es un pequeno backend desarrollado como test practico para MELI. <br>
La aplicación consta de dos endpoints que tienen por finalidad: devolver el listado de productos a consultar
y devolver detalle de un producto.

## Instalacion

Instalar las dependencias del Backend:
### `npm install`

Una vez instalado, lo puedes ejecutar en modo desarrollo:
### `npm run dev`

Para produccion se ejecuta:
### `npm start`

Si en el terminal vemos el siguiente print es porque ya el servidor esta levantado:
### `Conectado en el puerto 4000`

## Version de node
### `v8.17.0`


## Dependencias utilizadas

Express : Como Framework de node.js <br>

Express Validator: Para validar los parametros de entrada. <br>

Axios: Como cliente http.<br>
 
Babel: Para transformar nuestro código JS de última generación a JS que cualquier navegador o versión de Node.js entienda

## Consultas a endpoint remoto
Para hacer referencia a los endpoints sin hacer la instalacion se puede consutar: <br> <br>
Detalle de un producto: https://meli-backend-silma.herokuapp.com/api/items/:id, <br> 
por ejemplo: <br>
[https://meli-backend-silma.herokuapp.com/api/items/MLA864677112](https://meli-backend-silma.herokuapp.com/api/items/MLA864677112) <br> <br>

Busqueda de un producto: https://meli-backend-silma.herokuapp.com/api/items?q=:query,<br>
por ejemplo: <br>
[https://meli-backend-silma.herokuapp.com/api/items?q=pantalon](https://meli-backend-silma.herokuapp.com/api/items?q=pantalon)

