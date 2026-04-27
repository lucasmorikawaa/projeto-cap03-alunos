$(document).ready(function(){
    $('.phone_with_ddd').mask('(00) 00000-0000');
});
var alunos = [
    {
        id: 1,
        nome: "Lucas Morikawa",
        email: "lucaskeiji@gmail.com",
        telefone: "(11) 9293-232",
        curso: 1,
        turno: "Tarde",
    }
]

var cursos = [
    {
        id: 1,
        nome: "ADS",
    },
    {
        id: 2,
        nome: "GTI",
    },
    {
        id: 3,
        nome: "GE",
    },
    {
        id: 4,
        nome: "Eventos",
    }
]

loadAlunos();

function loadAlunos(){
    for(let aluno of alunos){
        addNewRow(aluno);
    }
}

function save (){

    var turnoSelecionado = "";
    if (document.getElementById("radioManha").checked) {
        turnoSelecionado = "Manhã";
    } else if (document.getElementById("radioTarde").checked) {
        turnoSelecionado = "Tarde";
    } else if (document.getElementById("radioNoite").checked) {
        turnoSelecionado = "Noite";
    }

    var aluno = {
        id: alunos.length + 1,
        nome: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        telefone: document.getElementById("inputTelefone").value, 
        curso: document.getElementById("inputCurso").value, 
        turno: turnoSelecionado
    };

    
    alunos.push(aluno);
    addNewRow(aluno);
    event.preventDefault();
    document.getElementById("formAlunos").reset();
}



function addNewRow(aluno){
    var table = document.getElementById("tableAlunos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.insertCell().appendChild(document.createTextNode(aluno.id));
    newRow.insertCell().appendChild(document.createTextNode(aluno.nome));
    newRow.insertCell().appendChild(document.createTextNode(aluno.email));

    var cellTelefone = newRow.insertCell();
    cellTelefone.appendChild(document.createTextNode(aluno.telefone));

    var cellCurso = newRow.insertCell();
    cellCurso.className = "d-none d-md-table-cell";
    var nomeCurso = cursos[aluno.curso - 1] ? cursos[aluno.curso - 1].nome : "N/A";
    cellCurso.appendChild(document.createTextNode(nomeCurso));

    var cellTurno = newRow.insertCell();
    cellTurno.className = "d-none d-md-table-cell";
    cellTurno.appendChild(document.createTextNode(aluno.turno));

}