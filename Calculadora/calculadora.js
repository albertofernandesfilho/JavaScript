function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Substração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

        if (!operacao || operacao > 6){
        alert('Digite uma operação válida:')
        calculadora();    
        } else {

        let n1 = Number(prompt('Insira o primeiro número'));
        let n2 = Number(prompt('Insira o segundo número'));
        let resultado;

        if (!n1 || !n2) {
        alert('Digite um número válido!')
        calculadora ();
        }
        else { function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
        }

        function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
        }

        function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
        }

        function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
        }

        function divisaoInteira(){
        resultado = n1 % n2;
        alert(` O resto da divisão entre ${n1} e ${n2} = ${resultado}`)
        novaOperacao();
        }

        function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`)
        novaOperacao();
        }
        } 

    function novaOperacao() {
    let opcao = Number(prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não'));

        if (opcao == 1) {
        calculadora();
         } 
         else if (opcao == 2){
            alert('Até mais')
         }
         else {
            alert('Digite uma opção válida')
            novaOperacao();
         }
    }

       
        
        if (operacao == 1){
        soma();
        }
        else if (operacao == 2){
        subtracao();
        }
        else if (operacao == 3){
        multiplicacao();
        }
        else if (operacao == 4){1
            
        divisaoReal();
        }
        else if (operacao == 5){
        divisaoInteira();
        }
        else if (operacao == 6){
        potenciacao();
        }

        // Utlilizando o Switch : switch (operacao) {
        //     case 1:
        //         soma();
        //         break;
        //     case 2:
        //         subtracao();
        //          break;
        //     case 3:
        //         multiplicacao();
        //         break:
        //     case 4:
        //         divisaoReal();
        //         break;
        //     case 5:
        //         divisaoInteira();
        //         break;
        //     case 6:
        //         potenciacao();
        //         break;
        // }
    }
}
calculadora();




    