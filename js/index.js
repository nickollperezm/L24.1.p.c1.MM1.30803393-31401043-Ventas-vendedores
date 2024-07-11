/*
Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.

Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)

Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 3
Monto total de las ventas: 520$
*/

import Cl_vendedor from "./Cl_vendedor.js";
import Cl_ventas from "./Cl_ventas.js";

let ventas = new Cl_ventas();
let vendedor1 = new Cl_vendedor("Mary", 150);
let vendedor2 = new Cl_vendedor("José", 135);
let vendedor3 = new Cl_vendedor("Carlos", 160);
let vendedor4 = new Cl_vendedor("Pedro", 75);
ventas.procesarVendedor(vendedor1);
ventas.procesarVendedor(vendedor2);
ventas.procesarVendedor(vendedor3);
ventas.procesarVendedor(vendedor4);

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de ventas que fueron por 100$ o menos: ${ventas.ventasMenosDe100()}
<br>Cantidad de ventas mayores a 100$: ${ventas.ventasMasDe100()}
<br>Monto total de las ventas: ${ventas.ventasTotales()}$
`;