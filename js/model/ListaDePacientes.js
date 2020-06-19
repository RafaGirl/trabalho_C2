class ListaDePacientes{
    constructor(){
        this._listaPacientes = [];
    }
    adiciona(paciente){
        this._listaPacientes.push(paciente);
    }
    get pacientes(){
        return [].concat(this._listaPacientes);
    }
}