class FilaCircular {
    constructor (tam = 5) {
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tam = tam;
    }

    enqueue(dado) {
        if (!this.isFull()) {
            this.dados[this.fim] = dado;
            
            if(this.fim === this.tam) {
                this.fim = 0;
            } else {
                this.fim++;
            }

        }else {
            throw new Error("QueueOverFlow");
        }
    }
}