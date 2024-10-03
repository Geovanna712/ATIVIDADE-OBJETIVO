let pessoa = {}
let atualizarDados = 0

pessoa.Nome = prompt("Digite seu nome:")
pessoa.Idade = prompt("Digite sua idade:")
pessoa.Cidade = prompt("Digite sua cidade:")

console.log(`Nome: ${pessoa.Nome}\n Idade: ${pessoa.Idade}\n Cidade: ${pessoa.Cidade}`)

atualizarDados = prompt("Deseja atualizar seus dados? Para atualizar sua idade digite 1\n, Para atualizar sua cidade digite 2\n Se nao deseja atualizar digite 0")

if (atualizarDados == 1){

    pessoaIdade = prompt("Atualize sua idade!")
}

else if (atualizarDados == 2){

    pessoa.Cidade = prompt("Atualize sua cidade!")

}

console.log(`Nome: ${pessoa.Nome}\n Idade: ${pessoa.Idade}\n Cidade: ${pessoa.Cidade}`)