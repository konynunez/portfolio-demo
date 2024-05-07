let citas = [
    {
        "autor": "Albert Einstein",
        "texto": "No poseo talentos especiales, solo soy apasionado curioso."
    },
    
    {
        "autor": "Anonimo",
        "texto": "Semanas de programacion te pueden ahorrar horas de planeacion."
    },
    {
        "autor": "Amelia Earhart",
        "texto": "Lo mas dificil es tomar la desición de actuar, el resto es simplemente tenacidad."
    },

    {
        "autor": "Aristoteles",
        "texto": "La calidad no es un acto, es un hábito."
    },

    {
        "autor": "Benjamin Franklin",
        "texto": "Dímelo y lo olvidaré, enseñamelo y lo recordaré, involúcrame y lo aprenderé."
    },

    {
        "autor": "Charles R. Swindoll",
        "texto": "La vida es 10% lo que te ocurre y 90% como reaccionas."
    },

    {
        "autor": "Jane Goodall",
        "texto": "Lo que haces hace una diferencia y debes decidir si que tipo de diferencia quieres hacer."
    },

    {
        "autor": "John Muir",
        "texto": "El poder de la imaginacion nos hace infinitos."
    
    },
    
    {
        "autor": "Mark Twain",
        "texto": "Los dos dias mas importantes de tu vida son el dia que naciste y el dia que descubres por qué."
    },
];

let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

// el metodo math floor nos entrega un numero entero
//generamos un entero aleatorio  min max el maximo no se incluye
function generarEnteroAleatorio(min, max) {
    // sin incluir max en los valores posibles.
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);


