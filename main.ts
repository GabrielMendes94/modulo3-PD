//Exercício Variáveis

let numero: number = 10;
let nula: null = null;
let txt: string = "texto";
let logica: boolean = true;

let array: Array<number> = [1, 2, 3, 4];
let array2: Array<string> = new Array("1","2","3","4");
let array3: Array<number|boolean> = [1, 2, true, false]; //cria array de dois tipos
let array4: Array<any> = [1,"2","3",true];

let obj: Object = {numero: 1, texto: "texto"};

let valor: number = 10;
let valorTxt: string = valor.toFixed(5);

console.log(valor);
console.log(valorTxt);
console.log(typeof valor, valor);
valor = parseInt(valorTxt, 20);
console.log(typeof valor, valor);

enum PassagemAerea {
    Economica, 
    Executiva, 
    PrimeiraClasse,
}

enum Tarefas {
    Trabalho,
    Estudo,
    Lazer,
}

enum Pedido {
    EmProcessamento,
    Enviado,
    Entregue,
    Cancelado,
}
