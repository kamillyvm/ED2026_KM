class Fila {
    constructor (tam = 5) {
        this.tam = tam;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(dado){ //enfileirar
        if (this.isFull()) {
            throw new Error("QueueOverflow");
        }
        this.dados[this.fim++] = dado;
    }

    dequeue(){ //desenfileirar
        if(this.isEmpty()) {
            throw new Error("QueueUnderflow");
        }
        this.inicio++;
    }

    front(){
        if(this.isEmpty()) {
            throw new Error("QueueUnderflow");
        }
        return this.dados[this.inicio];
    }

    isEmpty(){
        return this.length() === 0;
    }
    
    isFull(){
        return this.length() === this.tam;
    }
    
    length(){
        return this.fim - this.inicio;
    }
    
    toString(){}

}

export default Fila;