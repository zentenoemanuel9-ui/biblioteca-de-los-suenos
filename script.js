
const libros = [
    {
        titulo: "Momo",
        autor: "Michael Ende",
        descripcion: "Una niña llamada Momo tiene una capacidad extraordinaria para escuchar a los demás. Su historia nos invita a reflexionar sobre el tiempo, la amistad y la importancia de disfrutar la vida.",
        sueno: "Momo deseaba ayudar a las personas, escucharlas y devolverles el tiempo que les robaban los hombres grises.",
        suenoReal: "Mi sueño es poder salir del colegio y tener una buena vida, y dejar una huella en las personas que conocí."
    },
    {
        titulo: "Las ruinas circulares",
        autor: "Jorge Luis Borges",
        descripcion: "Un hombre llega a unas ruinas con el propósito de crear a otro ser humano mediante sus sueños. Un relato fantástico que juega con la realidad y la imaginación.",
        sueno: "El protagonista soñaba con crear un hombre mediante sus sueños y darle vida.",
        suenoReal: "Mi sueño sería ser futbolista."
    },
    {
        titulo: "Cuentos de amor, de locura y de muerte",
        autor: "Horacio Quiroga",
        descripcion: "Una colección de cuentos que explora el amor, la naturaleza, la locura y los aspectos más intensos de la existencia humana.",
        sueno: "Esta obra reúne varios cuentos, por lo que no tiene un único protagonista. Los sueños y deseos cambian según cada historia.",
        suenoReal: "Mi sueño es tener un Honda Civic Coupé 1998 (EJ8), preparado con estilo JDM calle/pista, color violeta metálico perlado, con una configuración deportiva personalizada."
    },
    {
        titulo: "Los ojos del perro siberiano",
        autor: "Antonio Santa Ana",
        descripcion: "Un joven cuenta la historia de su hermano y la relación que los une. Una novela que aborda la familia, la discriminación y la importancia de comprender a los demás.",
        sueno: "El protagonista quería acercarse a su hermano Ezequiel, comprenderlo y recuperar el vínculo con él.",
        suenoReal: "Mi sueño es poder llegar a ser aquello que siempre quise y cumplirlo con el paso del tiempo."
    },
    {
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        descripcion: "Gregor Samsa despierta una mañana convertido en un ser extraño. La historia reflexiona sobre la identidad, la familia y el aislamiento.",
        sueno: "Gregorio Samsa soñaba con mantener económicamente a su familia, pagar las deudas de sus padres y tener una vida propia.",
        suenoReal: "Mi sueño es aprobar Matemáticas con Zapana."
    },
    {
        titulo: "Caperucita Roja",
        autor: "Cuento tradicional",
        descripcion: "Una niña emprende un viaje por el bosque para visitar a su abuela, pero durante el camino se encuentra con un lobo.",
        sueno: "Su deseo era llevarle comida a su abuela y llegar sana y salva a su casa.",
        suenoReal: "Mis metas más importantes son, primero y principal, terminar mis estudios con esfuerzo y dedicación, y luego recibirme de la carrera que realmente quiero estudiar, porque sé que esa será la base de todo lo que vendrá después. No lo hago por cumplir, sino porque quiero prepararme bien para tener las herramientas que necesito para salir adelante.\n\nMis sueños que deseo cumplir nacen de ese esfuerzo: imagino el día en que tenga un trabajo estable, donde pueda sentirme valorada y tranquila, sabiendo que con lo que hago puedo sostenerme yo misma. Sueño con construir mi propia casa, ese lugar que sea solo mío, donde me sienta segura y libre, logrado con mis propias manos y mi propio esfuerzo. Y también sueño con formar una familia, un hogar lleno de cariño, donde pueda compartir todo lo que he construido y aprendido.\n\nSé que el camino no siempre será fácil y que requerirá paciencia y constancia, pero cada día que avanzo, cada lección que aprendo y cada meta que alcanzo, me acerca un poco más a ese futuro que tanto anhelo. Todo vale la pena, porque lo que hoy construyo con esfuerzo, mañana será mi realidad."
    }
];

let votoRealizado = false;

function abrirLibro(numero) {
    const libro = libros[numero];

    document.getElementById("titulo-modal").textContent =
        libro.titulo;

    document.getElementById("autor-modal").textContent =
        "Autor: " + libro.autor;

    document.getElementById("descripcion-modal").textContent =
        libro.descripcion;

    const lectura = document.getElementById("lectura-modal");
    lectura.innerHTML = "";

    const tituloPersonaje = document.createElement("h3");
    tituloPersonaje.textContent = "El sueño del personaje";

    const textoPersonaje = document.createElement("p");
    textoPersonaje.textContent = libro.sueno;

    const tituloReal = document.createElement("h3");
    tituloReal.textContent = "El sueño de una persona real";

    const textoReal = document.createElement("p");
    textoReal.textContent = libro.suenoReal;

    lectura.appendChild(tituloPersonaje);
    lectura.appendChild(textoPersonaje);
    lectura.appendChild(tituloReal);
    lectura.appendChild(textoReal);

    document.getElementById("ventana-libro").style.display = "block";
}

function cerrarLibro() {
    document.getElementById("ventana-libro").style.display = "none";
}

function cargarVotacion() {
    const opciones = document.getElementById("opciones-voto");

    libros.forEach((libro, numero) => {
        const opcion = document.createElement("label");
        opcion.className = "opcion-voto";

        opcion.innerHTML = `
            <input type="radio" name="voto" value="${numero}">
            <span>${libro.titulo}</span>
        `;

        opciones.appendChild(opcion);
    });
}

function votar() {
    if (votoRealizado) {
        document.getElementById("mensaje-voto").textContent =
            "Ya realizaste tu voto en esta sesión.";
        return;
    }

    const seleccionado = document.querySelector(
        'input[name="voto"]:checked'
    );

    if (!seleccionado) {
        document.getElementById("mensaje-voto").textContent =
            "Primero tenés que elegir un libro.";
        return;
    }

    const libroElegido = libros[Number(seleccionado.value)];

    votoRealizado = true;

    document.getElementById("mensaje-voto").textContent =
        "¡Gracias por votar por " + libroElegido.titulo + "!";

    document.getElementById("boton-votar").disabled = true;
}

document.getElementById("formulario-suenos").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const sueno = document.getElementById("sueno").value.trim();

        if (!nombre || !sueno) {
            return;
        }

        const tarjeta = document.createElement("div");
        tarjeta.className = "sueno-card";

        const titulo = document.createElement("h4");
        titulo.textContent = nombre;

        const texto = document.createElement("p");
        texto.textContent = sueno;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(texto);

        const lista = document.getElementById("lista-suenos");

        if (lista.querySelector("p")) {
            lista.innerHTML = "";
        }

        lista.prepend(tarjeta);

        document.getElementById("formulario-suenos").reset();
    }
);

cargarVotacion();

console.log("Biblioteca de los Sueños iniciada correctamente.");
