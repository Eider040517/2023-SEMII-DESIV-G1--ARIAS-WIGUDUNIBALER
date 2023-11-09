const formulario = document.querySelector('form');

const seccion = document.querySelector('#respuesta');

const bloques = document.querySelector('#bloquescaminos');

function arregloPiramide(filas) {

    //Generamos un arreglo con las cordenadas y el contenido para formar la piramide 
    const arreglo = new Array();
    var arreglosInternos = new Array();


    for (let i = 1; i <= filas; i++) {

        for (let j = 0; j < i; j++) {

            arreglosInternos.push(Math.floor((Math.random() * (99)) + 1));

        }

        arreglo.push(arreglosInternos);
        arreglosInternos = [];

    }

    return arreglo;
}

function dibujarPiramide(arrOrg, arrSol) {

    /*Esta area se encarga de dibujar la piramide en el HTML 
    gracias al arreglo que recibe*/
    let marcados = arrSol; //
    let dibujo = '';

    for (let i = 0; i < arrOrg.length; i++) {

        dibujo += `<div class='fila'>`;

        for (let j = 0; j <= i; j++) {

            if (marcados[1][i][0] == arrOrg[i][j] && marcados[1][i][2] == j) {

                dibujo += `<div class='celda camino'>${arrOrg[i][j]}</div > `;

            } else {

                dibujo += `<div class='celda'>${arrOrg[i][j]}</div > `;
            }

        }
        dibujo += `</div > `;
    }

    return dibujo;
}

function dibujarCamino(arrSol) {

    //Esta area se encarga de dibujar el camino solucion en el HTML 

    let marcados = arrSol;
    let camino = '';
    console.log(marcados);

    camino += `<div class='fila'>`;
    for (let i = 0; i < marcados[1].length; i++) {

        camino += `<div class='celda camino'>${marcados[1][i][0]}</div > `;

    }
    camino += `<div class='sol'>=</div><div class='sol'>${marcados[0][0]}</div></div > `;

    return camino;
}

function buscarTodosCaminoAsc(arrOrg) {

    let tamano = arrOrg.length;
    const resultado = [];
    const rastro = [];
    const nuevoValorPostInicial = [];
    const datos = [];
    let fila = 0;
    let columna = 0;
    const ruta = [];

    for (let i = 0; i < tamano; i++) {

        rastro[i] = new Array(tamano).fill(0);

    }

    for (let i = 0; i < tamano; i++) {

        resultado[i] = arrOrg[tamano - 1][i]; //Aqui obtenemos los valores de la base

    }

    //Aqui iniciamos desde la fila anterior a la base de la piramide+
    for (let i = tamano - 2; i >= 0; i--) {

        for (let j = 0; j <= i; j++) {

            const valorInicial = arrOrg[i][j];  //Elemento de la fila ANTES de la base
            const valorIzquierdo = resultado[j];  //Obtenemos el elemento izquierdo de la base
            const valorDerecho = resultado[j + 1];  //Obtenemos el elemento derecho de la base

            //Obtenemos los valores e indices de la ruta a partir de la fila antes de la base
            if (valorDerecho >= valorIzquierdo) {

                nuevoValorPostInicial[0] = valorDerecho;
                rastro[i][j] = 1;

            } else {

                nuevoValorPostInicial[0] = valorIzquierdo;
                rastro[i][j] = 0;

            }

            // Aqui acumulamos la suma de los bloques
            resultado[j] = valorInicial + nuevoValorPostInicial[0];

        }

    }

    // Aqui creamos la ruta del mayor valor
    while (fila < tamano - 1) {

        ruta.push([arrOrg[fila][columna], fila, columna]);
        const direccion = rastro[fila][columna];
        fila++;
        columna += direccion;

    }

    //Se agrega el indice de la base de la piramide
    ruta.push([arrOrg[fila][columna], tamano - 1, columna]);
    datos[0] = resultado;
    datos[1] = ruta
    return datos;  //Resultado en un arreglo de dos columnas [suma][ruta (elemento, x,y)]

}

const principal = (e) => {

    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const niveles = datos.get('niveles');
    if (niveles < 1 || niveles > 50) {
        alert("Valor no permitido...");
    }
    else {
        const arrPiramide = arregloPiramide(niveles);
        const matrizSol = buscarTodosCaminoAsc(arrPiramide);
        console.log(matrizSol);
        seccion.innerHTML = dibujarPiramide(arrPiramide, matrizSol);
        bloques.innerHTML = dibujarCamino(matrizSol);
    }
}

formulario.addEventListener('submit', principal); //Aqui escuchamos el evento