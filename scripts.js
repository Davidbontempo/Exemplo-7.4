//Definir classe contaBancaria

class contaBancaria {
    //Propriedades
    #saldo;
    constructor(){
        this.#saldo = 0;
    }

    //Métodos
    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    sacar(valor){
        if(this.temSaldoParaSacar(valor)) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    temSaldoParaSacar(valor){
        return this.#saldo >= valor;
    }

    get saldo(){
        return this.#saldo;
    }
}

class CaixaEletronico { // Nome da classe em PascalCase para evitar conflito
    constructor(conta_atrelada){ // Recebe a conta por parâmetro
        this.conta = conta_atrelada;
    }

    depositar() {
        // Pegar o valor do depósito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value)

            // Validação básica do input
            if (isNaN(valorDeposito) || valorDeposito <= 0) {
                alert("Por favor, insira um valor válido.");
                return;
                }

        // Fazer o depósito na conta
        this.conta.depositar(valorDeposito);
        // Exibir saldo atualizado
        this.mostrarSaldo(this.conta.saldo);

    }

    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
    }

}

// Criar instâncias
 const minhaConta = new contaBancaria();
 const caixa = new CaixaEletronico(minhaConta); // Passa a instância correta

