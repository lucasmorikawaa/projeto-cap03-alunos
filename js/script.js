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
    var table = document.getElementById("tableAlunos");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(aluno.id);
    newRow.insertCell().appendChild(idNode);

    var nomeNode = document.createTextNode(aluno.nome);
    newRow.insertCell().appendChild(nomeNode);

    var emailNode = document.createTextNode(aluno.email);
    newRow.insertCell().appendChild(emailNode);

    var telefoneNode = document.createTextNode(aluno.telefone);
    newRow.insertCell().appendChild(telefoneNode);
    
    var cursoNode = document.createTextNode(cursos[aluno.curso - 1].nome);
    newRow.insertCell().appendChild(cursoNode);

    var turnoNode = document.createTextNode(aluno.turno);
    newRow.insertCell().appendChild(turnoNode);

}