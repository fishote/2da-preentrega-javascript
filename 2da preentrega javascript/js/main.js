//registro de gastos
let registroDeGastos = [];

let categoriaGastosAgregados;
let montoGastosAgregado;

do{
   categoriaGastosAgregados = prompt("Ingresar la CATEGORIA deseada para registrar.Para salir, escribe \"salir\".");

   if (categoriaGastosAgregados.toLowerCase() !== "salir") {

      do {
          montoGastosAgregado =parseInt(prompt("ingresa el MONTO de gasto que deseas registrar."));
      } while (isNaN(montoGastosAgregado) || montoGastosAgregado === "" || montoGastosAgregado === null) 

      let gastoAgregado = {
          categoria: categoriaGastosAgregados,
          monto: montoGastosAgregado
      }
      registroDeGastos.push(gastoAgregado);
    }

} while (categoriaGastosAgregados.toLowerCase() !== "salir");


function calcularTotalGastos(){
   let total =registroDeGastos.reduce( (acc, gasto)=>acc + gasto.monto, 0);
   return total;
}

function calcularPromedioGastos(){
    let total =calcularTotalGastos();
    let promedio = total / registroDeGastos.length;
    return promedio;
}

console.log("registro de gastos", registroDeGastos );
console.log("Totl de gastos", calcularTotalGastos()),+
console.log("Promedio de gastos", calcularPromedioGastos());