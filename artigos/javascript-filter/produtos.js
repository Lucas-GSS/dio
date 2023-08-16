const produtos = [
  {id: 1, descricao: "Smartphone", categoria: "Eletrônico", preco: 1000},
  {id: 2, descricao: "Notebook", categoria: "Eletrônico", preco: 3000},
  {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico", preco: 1800},
  {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico", preco: 150},
  {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico", preco: 500},
  {id: 6, descricao: "AirFryer", categoria: "Eletrodoméstico", preco: 600},
  {id: 7, descricao: "PS5", categoria: "Eletrônico", preco: 4500},
  {id: 8, descricao: "Smart TV 50 4k", categoria: "Eletrônico", preco: 3200},
  {id: 9, descricao: "Monitor Gamer", categoria: "Eletrônico", preco: 1800},
  {id: 10, descricao: "Máquina de Lavar", categoria: "Eletrodoméstico", preco: 1600}
];

const eletronicosCaros = produtos.filter(produto => produto.categoria === 'Eletrônico' && produto.preco >= 2000)

console.log(eletronicosCaros)

/**
Saída:
[
  {
    id: 2,
    descricao: 'Notebook',
    categoria: 'Eletrônico',
    preco: 3000
  },
  { id: 7, descricao: 'PS5', categoria: 'Eletrônico', preco: 4500 },
  {
    id: 8,
    descricao: 'Smart TV 50 4k',
    categoria: 'Eletrônico',
    preco: 3200
  }
]
*/