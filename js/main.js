function cliqueMouse(){
    var newPaciente = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var endereco = document.getElementById("endereco"); 
    var sexo = document.getElementById("sexo");
    var telefone = document.getElementById("tel");

    console.log(newPaciente);

    var tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${nome.textContent}</td>
    <td>${idade.value}</td>
    <td>${endereco.textContent}</td>
    <td>${sexo.textContent}</td>
`;
}