import express from 'express';
import "dotent/config";

import routes from "./routes/index.js"
const app = express();




// Middleware para interpretar cuerpos de petición en formato JSON
app.use(express.json());

// Exponer las rutas definidas en el archivo routes/index.js, es importante que esta línea esté después de la línea app.use(express.json()) para que las rutas puedan interpretar correctamente los cuerpos de las peticiones en formato JSON.
app.use(routes)

console.log("Routes initialized");

const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
