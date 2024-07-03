const prompt = require('prompt-sync')({sigint: true});
let num1 = parseFloat (prompt ('Digite o primeiro número:'));
let operacao = prompt ('Escolha uma operação [+,-,*,/,%]:');
let num2 = parseFloat (prompt('Digite o segundo número:'));
let resultado = undefined

switch(operacao) {
    case '1':
        resultado = num1 + num2
        break;
    case 2:
        resultado = num1 - num2
        break;
    case 3:
        resultado = num1 * num2
        break;
    case 4:
        if( num2 !== 0) {
            resultado = num1 / num2
            break;
        }else{
            console.log( 'Divisão por zero é permitida!')
            break
        }
    case '5':
        operacao = (num1 * num2 ) % 100;
    default:
        throw new Error('Operação inválida! Tente novamente.');
        break
    }

    console.log(`Resultado = ${resultado}`)

