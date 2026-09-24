const talleres = [
  { nombre: 'Introducción a Python', instructor: 'Ing. María López', cupo: 25, inscritos: 25 },
  { nombre: 'Fundamentos de Redes', instructor: 'Ing. Carlos Ramírez', cupo: 30, inscritos: 18 },
  { nombre: 'Diseño de Bases de Datos', instructor: 'Ing. Ana Torres', cupo: 20, inscritos: 20 },
  { nombre: 'Desarrollo Web con JS', instructor: 'Ing. María López', cupo: 25, inscritos: 10 },
];

function pintarTabla() {
    //Debe obtener la tabla y rellenarla con los datos de talleres

}

const formArreglos = document.getElementById('form-arreglos');
const resultadoArreglos = document.getElementById('resultado-arreglo');
const selectOperacionAreglo =document.getElementById('operacion-arreglo');

formArreglos.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const operacion = selectOperacionAreglo.value;

    let resultado;

    switch (operacion) {
        case 'forEach':
            resultado = talleres.map((t) => ` - ${t.nombres} (${t.inscritos}/${t.cupo})`).join('\n');
            break;

    }

    resultadoArreglos.textContent = resultado;
});

//Ejercicio de objetos

const formObjetos = document.getElementById('form-objeto');
const resultadoObjeto = document.getElementById('resultado-objeto');

formObjetos.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const taller = {
        nombre: document.getElementById('obj-nombre').value,
        instructor: document.getElementById('obj-instructor').value,
        cupo: Number(parseInt(document.getElementById('obj-cupo').value)),
        inscritos: Number(parseInt(document.getElementById('obj-inscritos').value)),
    };

    const operacion = document.getElementById('operacion-objeto').value;

    let resultado;

    switch (operacion) {
        case 'keys':
            resultado = JSON.stringify(Object.keys(taller));
            break;
        case 'values':
            resultado = JSON.stringify(Object.values(taller));
            break;
        case 'entries':
            resultado = JSON.stringify(Object.entries(taller));
            break; 
        case 'stringify':
            const textoJson = JSON.stringify(taller, null, 2);
            resultado = `Texto JSON:\n${textoJson}\nTipo: ${typeof textoJson}`;
            break;
        case 'roundtrip':
            const textoJsons = JSON.stringify(taller, null, 2);
            const objetoDevuelta = JSON.parse(textoJsons);

            resultado = [
                textoJsons, 
                '',
                `tipo:${typeof objetoDevuelta}`,
                objetoDevuelta.nombre
            ].join('\n');
            break;
    }
    resultadoObjeto.textContent = resultado;
});