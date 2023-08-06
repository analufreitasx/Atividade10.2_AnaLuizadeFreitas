function Potência (base, expoente){
    return base ** expoente;
}

const base = Number(prompt('Este site executa o cálculo de uma potência. \nDigite a base da potência que deseja calcular: '))
const exp = Number(prompt('Agora, digite o expoente da potência: '))
alert(" O resultado de " + base + " elevado à " + exp + " é igual a " + Potência (base, exp) + ".")