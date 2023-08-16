const clientes = [{
    'nome': 'Lucas',
    'ativo': true
  },
  {
    'nome': 'Maria',
    'ativo': false
  },
  {
    'nome': 'Mateus',
    'ativo': true
  },
  {
    'nome': 'Renan',
    'ativo': false
  },
  {
    'nome': 'Julya',
    'ativo': false
  },
  {
    'nome': 'Jéssica',
    'ativo': true
  }
]

const clientesAtivos = []

for (let i = 0; i <= clientes.length - 1; i++) {
  if (clientes[i]['ativo']) {
    // se o cliente, na posição i da lista, tiver a chave 'ativo' com valor true
    // adicione-o na lista de clientes ativos
    clientesAtivos.push(clientes[i])
  }
}

console.log(clientesAtivos)
/* Saída:
[
  { nome: 'Lucas', ativo: true },
  { nome: 'Mateus', ativo: true },
  { nome: 'Jéssica', ativo: true }
]
*/

const clientesAtivosFilter = clientes.filter(cliente => cliente['ativo']);

console.log(clientesAtivosFilter);

/**
 Saída:
[
  { nome: 'Lucas', ativo: true },
  { nome: 'Mateus', ativo: true },
  { nome: 'Jéssica', ativo: true }
]
*/