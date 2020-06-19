class Paciente{
    constructor(nome, endereco, telefone, idade, peso, altura, problemas){
        if(nome && endereco && telefone && peso && altura && problemas){
            this.nome = nome
            this.endereco = endereco
            this.telefone = telefone
            this.idade = idade
            this.peso = peso
            this.altura = altura
            this.problemas = problemas
        }else{
            this.nome = null
            this.endereco = null
            this.telefone = "(99) 99999-9999"
            this.peso = 0.0
            this.altura = 0.0
            this.problemas = null
        }
        Object.freeze(this);
    }
    get nome(){
        return this._nome;
    }
    get endereco(){
        return this.endereco;
    }
    get telefone (){
        return this.telefone;
    }
    get peso(){
        return this.peso;
    }
    get altura(){
        return this.altura;
    }
    get problemas(){
        return this.problemas;
    }

}
