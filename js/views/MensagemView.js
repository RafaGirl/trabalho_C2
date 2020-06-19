class MensagemView extends VieW{
    constructor(paciente){
        super(paciente);
    }    
    _template(model){
        this._paciente.style.display = "";
        setTimeout(
            () => this._paciente.style.display = 'none',
            3000
        );
        return `
        <div class="alert alert-success" role="alert">${model.mensagem}</div>
        `;
    }
}