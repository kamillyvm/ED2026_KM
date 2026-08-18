class Pilha {
    constructor (capacidade = 5) {
        this.capacidade = capacidade;
        this.topo = 0;
        this.dados = [];
    }

    pop(){
        if(this.isEmpty()){ //se a pilha está vazia, dá erro, pois não remove uma pilha vazia. senão, remove.
            throw new Error("Stack underflow");
        }
        this.topo = this.topo - 1; //se não tiver vazio, diminui o topo em 1
    }

    push(dado){
        if(this.isFull()){ //se a pilha está cheia, dá erro, pois não adiciona na pilha cheia. senão, adiciona mais um.
            throw new Error("Stack overflow");
        }
        this.dados[this.topo++] = dado;
    }

    top(){
        return this.dados[this.topo - 1];
    }

    length(){
        return this.topo;
    }

    toString(){}
    isEmpty(){
        return this.topo === 0;
    }

    isFull(){
        return this.length() === this.capacidade;
    }

}

export default Pilha;