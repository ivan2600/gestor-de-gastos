const selectUser = document.getElementById('select-user');
const nombreDelGasto = document.getElementById('input_nombre-gasto');
const monto = document.getElementById('monto');
const submit = document.getElementById('submit');
const resultado = document.querySelector('.resultado');
const total = document.querySelector('.total');
const gastos = [];
let sumaDeGastos = 0;

submit.addEventListener('click', ()=>{

  const result = document.createElement('p');
  result.textContent = `${selectUser.value}--${nombreDelGasto.value}--$ ${monto.value}`;
  resultado.appendChild(result);

  const nuevoGasto = {
    usuario: selectUser.value,
    nombre: nombreDelGasto.value,
    monto: monto.value
  }

  gastos.push(nuevoGasto);
  
  sumaDeGastos += Number(nuevoGasto.monto);
  
  total.innerHTML = "$ " + sumaDeGastos;

  console.log('suma de gastos ' + sumaDeGastos);

  document.getElementById("formulario").reset();
})

