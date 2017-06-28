var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var pregunta1 = prompt("Ingresa tu nombre");
    var pregunta2 = prompt("Porcentaje tecnico");
    var pregunta3 = prompt("Porcentaje HSE");

    function stud(name, tecnico, hse) {
        this.name = name;
        this.tecnico = tecnico;
        this.hse = hse;
    }

    var estudiantito = new stud(pregunta1, pregunta2, pregunta3);
    estudiantes.push(estudiantito);
    return estudiantito;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.name + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var mostrarEstudiantes = [];
    for (var i in estudiantes) {
        mostrarEstudiantes += mostrar(estudiantes[i]);
    }
    return mostrarEstudiantes;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    for (i = 0; i < estudiantes.length; i++) {
        if (nombre.toLowerCase() == estudiantes[i].name.toLowerCase()) {
            //return estudiantes[i];
            return swal("Good job!", "You clicked the button!", "success");
        }

    }




}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes.sort(function(a, b) {
        return a.tecnico - b.tecnico;
    });

    return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes.sort(function(a, b) {
        return a.hse - b.hse;
    });

    return estudiantes;
}
