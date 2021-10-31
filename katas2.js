// comece a criar a sua função add na linha abaixo
function add(a, b){
    let resultado = a + b;
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){
    let multiplicacao = 0
    for (let multiplicador = 0; multiplicador<y; multiplicador++){
        multiplicacao = add(x, multiplicacao)
    }
    return multiplicacao
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n){
    let resultado = x
    for (let potencia=1; potencia<n; potencia++){
        resultado = multiply(x, resultado)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = x
    for(let fatorial = x-1; fatorial >= 1; fatorial--){
        resultado = multiply(resultado, fatorial);
    }
    return resultado;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
