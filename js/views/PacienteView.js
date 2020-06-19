class PacienteView extends VieW{
    constructor(paciente){
        super(paciente);
    }
}
_template (model){
    return `
    <table class="table table-hover table-bordered">
            <tread>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Peso</th>
                    <th>Altura</th>
                    <th>Problemas de saúde</th>
                    <th>Descrição</th>
                </tr>
            </tread>
            <tbody>
            ${model.pacientes.map( paciente =>`
                <tr>
                    <td>${paciente.nome}</td>
                    <td>${paciente.endereco}</td>
                    <td>${paciente.telefone}</td>
                    <td>${paciente.idade}</td>
                    <td>${paciente.peso}</td>
                    <td>${paciente.altura}</td>
                    <td>${paciente.problemas}</td>
                    <td></td>
                </tr>
            `).join('')}
            </tbody>
            <tfoot>

            </tfoot>
        </table>`
}