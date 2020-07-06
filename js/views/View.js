class VieW{
    constructor(paciente){
        this._paciente = paciente
    }
    _template(model){
        throw new Error('É necessário criar o método _template() para extender a classe!')
    }
    update(model){
        this._paciente.innerHTML = this._template(model)
    }
}