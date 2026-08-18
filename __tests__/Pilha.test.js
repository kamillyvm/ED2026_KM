import Pilha from "../src/Pilha";

let p;

beforeEach(() => { //antes de todo teste, faça isso
    p = new Pilha;
})

test("a pilha recém iniciada é vazia", () => {
    expect(p.isEmpty()).toBe(true); //espero que...
})

test("o tamanho da pilha recém iniciado é zero", () => {
    expect(p.length()).toBe(0);
})

test("testando a remoção de elementos", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    expect(p.top()).toBe("D");
    expect(p.length()).toBe(4);
    expect(p.isEmpty()).toBe(false);
    expect(p.isFull()).toBe(false);
    p.pop();
    expect(p.top()).toBe("C");
    p.pop();
    expect(p.top()).toBe("B");
    p.pop();
    expect(p.top()).toBe("A");
    p.pop();
    expect(p.isEmpty()).toBe(true);
    expect(p.length()).toBe(0);
    expect(() => p.pop()).toThrow("Stack underflow");

})

test("testando o tamanho da pilha", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    p.push("E");
    expect(() => p.push("F")).toThrow("Stack overflow");
})