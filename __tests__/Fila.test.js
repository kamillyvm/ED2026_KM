import Fila from "../src/Fila";


let f;

beforeEach(() => {
    f = new Fila(5);
});

//1
test("Acabei de criar a fila, o length é zero e ela está vazia", () => {
    expect(f.length()).toBe(0);
    expect(f.isEmpty()).toBe(true);
});

//2
test("Inserção de 3 elementos e verificação do front", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");

    expect(f.front()).toBe("A");
    expect(f.isEmpty()).toBe(false);
    expect(f.length()).toBe(3);
    f.dequeue();

    expect(f.front()).toBe("B");
    expect(f.length()).toBe(2);
    f.dequeue();

    expect(f.front()).toBe("C");
    expect(f.length()).toBe(1);
    f.dequeue();

    expect(f.isEmpty()).toBe(true);
    expect(f.length()).toBe(0);

    expect(() => f.dequeue()).toThrow("Stack Underflow");

});

//3)
test("Verificando se a fila fica cheia", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    f.enqueue("D");
    f.enqueue("E");

    expect(f.isFull()).toBe(true);
    expect(f.length()).toBe(5);
    
});

//4)
test("Inserir em fila cheia deve lançar erro", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    f.enqueue("D");
    f.enqueue("E");

    expect(() => f.enqueue("F")).toThrow("Stack QueueOverflow");
});

//5)
test("Testando comportamento após remover elementos", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");

    expect(f.front()).toBe("A");
    expect(f.isEmpty()).toBe(false);
    expect(f.length()).toBe(3);
    f.dequeue();

    expect(f.front()).toBe("B");
    expect(f.length()).toBe(2);
    f.dequeue();

    expect(f.front()).toBe("C");
    expect(f.length()).toBe(1);
    f.dequeue();

    expect(f.isEmpty()).toBe(true);
    expect(f.length()).toBe(0);

    expect(() => f.dequeue()).toThrow("Stack QueueUnderflow");

});
//7) 
test("Inserir e remover alternadamente", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.dequeue();
    f.enqueue("C");
    f.enqueue("D");

    expect(f.front()).toBe("B");
    expect(f.length()).toBe(3);
});

//8)
test("Front em fila vazia deve lançar erro", () => {
    expect(() => f.front()).toThrow("Stack QueueUnderflow");
});