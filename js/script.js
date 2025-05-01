function filtrarCarros(tipo) {
  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = '';
  Object.values(detalhes)
    .filter(c => tipo === 'todos' || c.nome.toLowerCase().includes(tipo) || c.descricao.toLowerCase().includes(tipo))
    .forEach(montarCard);
}

function filtrarCarrosPorMarca(marca) {
  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = '';
  Object.values(detalhes)
    .filter(c => c.nome.toLowerCase().includes(marca))
    .forEach(montarCard);
}

function montarCard(carro) {
  const div = document.createElement('div');
  div.className = 'carro';
  div.dataset.tipo = carro.descricao.toLowerCase().includes('suv') ? 'suv'
                    : carro.descricao.toLowerCase().includes('esportivo') ? 'esportivo'
      : 'sedan';
  div.innerHTML = `
    <img src="${carro.imagem}" alt="${carro.nome}">
    <h2>${carro.nome}</h2>
    <p>Preço: R$ ${carro.preco.toLocaleString('pt-BR')}</p>
    <button onclick="mostrarDetalhesCarro('${carro.nome}')">Detalhes</button>
    <button onclick="agendarTestDrive('${carro.nome}')">Agendar Test Drive</button>
  `;
  catalogo.appendChild(div);
}

function mostrarDetalhesCarro(nome) {
  const carro = detalhes[nome]; if (!carro) return;
  document.getElementById('detalhes-imagem').src = carro.imagem;
  document.getElementById('detalhes-titulo').textContent = carro.nome;
  document.getElementById('detalhes-ano').textContent = carro.ano;
  document.getElementById('detalhes-preco').textContent = carro.preco.toLocaleString('pt-BR');
  document.getElementById('detalhes-descricao').textContent = carro.descricao;
  document.getElementById('detalhes-vantagens').textContent = carro.vantagens;
  document.getElementById('detalhes').classList.remove('hidden');
}

function fecharDetalhes() {
  document.getElementById('detalhes').classList.add('hidden');
}

function agendarTestDrive(nome) {
  const inputCarro = document.getElementById('carro');
  const img = document.getElementById('imagem-carro');
  inputCarro.value = nome;
  img.src = detalhes[nome]?.imagem || '';
  img.style.display = img.src ? 'block' : 'none';
  document.getElementById('form-agendamento').scrollIntoView({ behavior: 'smooth' });
}

window.filtrarCarros = filtrarCarros;
window.filtrarCarrosPorMarca = filtrarCarrosPorMarca;
window.mostrarDetalhesCarro = mostrarDetalhesCarro;
window.fecharDetalhes = fecharDetalhes;
window.agendarTestDrive = agendarTestDrive;



//ODEIO BACKEND, aqui não ta funcionando, mas o código é esse (eu acho)

// function enviarAgendamento(event) {
//   event.preventDefault();
//   const carro = document.getElementById('carro').value;
//   const nome = document.getElementById('nome').value;
//   const telefone = document.getElementById('telefone').value;
//   const data = document.getElementById('data').value;
//   const hora = document.getElementById('hora').value;

//   if (!carro || !nome || !telefone || !data || !hora) {
//     alert('Por favor, preencha todos os campos.');
//     return;
//   }

//   alert(`Agendamento realizado com sucesso!\nCarro: ${carro}\nNome: ${nome}\nTelefone: ${telefone}\nData: ${data}\nHora: ${hora}`);
// }