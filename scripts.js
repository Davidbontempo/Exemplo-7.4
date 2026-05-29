//Definir classe contaBancaria

class ContaBancaria {
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
        if(this.temSaldoParaSacar(valor) && valor > 0) { // Validação extra para valores negativos
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

        this.conta.depositar(valorDeposito); // Fazer o depósito na conta
        this.mostrarSaldo(this.conta.saldo); // Exibir saldo atualizado
        this.limparInputs();
    }

    sacar() {
        //Pegar o valor do saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value)

        if (isNaN(valorSaque) || valorSaque <= 0) {
            alert("Por favor, insira um valor de saque válido.");
            return;
        }

        // Executa o saque e verifica se deu certo
        const saqueSucesso = this.conta.sacar(valorSaque);
        
        if (saqueSucesso) {
            this.mostrarSaldo();
        } else {
            alert("Saldo insuficiente para realizar o saque.");
        }
        
        this.limparInputs();
    }

    // Exibe o saldo pegando direto da conta atrelada
    mostrarSaldo(){
        const saldoAtual = this.conta.saldo;
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldoAtual.toFixed(2)}`;
    }

    // Função utilitária para limpar os campos
    limparInputs() {
        document.getElementById("valorDeposito").value = '';
        document.getElementById("valorSaque").value = '';
    }
}

// Criar instâncias
 const minhaConta = new ContaBancaria();
 const caixa = new CaixaEletronico(minhaConta);

