const selectUser = document.getElementById('select-user');
const nombreDelGasto = document.getElementById('input_nombre-gasto');
const monto = document.getElementById('monto');
const submit = document.getElementById('submit');
const resultado = document.querySelector('.resultado');
const total = document.querySelector('.total');
const gastos = [];
let arrayDeGastos = [];
let sumaDeGastos = 1;

submit.addEventListener('click', ()=>{

  const result = document.createElement('p');
  result.textContent = `${selectUser.value}--${nombreDelGasto.value}--$${monto.value}`;
  resultado.appendChild(result);

  const nuevoGasto = {
    usuario: selectUser.value,
    nombre: nombreDelGasto.value,
    monto: monto.value
  }

  gastos.push(nuevoGasto);

  arrayDeGastos.push(nuevoGasto.monto)
  console.log(arrayDeGastos);
  
  for (let i = 0; i < arrayDeGastos.length; i++) {
    sumaDeGastos =+ arrayDeGastos[i];
    console.log('array:'+ sumaDeGastos);
  }
  
  total.innerHTML = sumaDeGastos;

  console.log('suma de gastos ' + sumaDeGastos);
})

