class PacienteController{
    constructor(){
        this._nome = $('#nome');
        this._endereco = $('#endereco');
        this._telefone = $('#telefone');
        this._idade = $('#idade');
        this._peso = $('#peso');
        this._altura = $('#altura');
        this._problemas = $('#problemas');
        
        this._listaPacientes = new ListaDePacientes();
        this._pacienteView = new PacienteView();

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));

        this._pacienteView.update(this._listaPacientes);
    }
    inserirPaciente(event){
        event.preventDefault();

        let paciente = this._criaPaciente();
        this._listaPacientes.adiciona(paciente);
        this._pacienteView.update(this._listaPacientes);
        this._mensagem.mensagem = 'Cadastro Realizado com sucesso. Obrigada!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }
    _criaPaciente(){
        return new Paciente(
            this._nome.value,
            this._endereco.value,
            this._telefone.value,
            this._idade.value,
            this._peso.value,
            this._altura.value,
            this._problemas.value
        );
    }
    _limpaFormulario(){
        this._nome.value = '';
            this._endereco = '';
            this._telefone = ''
            this._idade = 0;
            this._peso = 0.0;
            this._altura = 0.1;
            this._problemas = '';
    }
}