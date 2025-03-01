// Filtra os carros com base no tipo (sedan, suv, esportivo ou todos)
function filtrarCarros(tipo) {
    const carros = document.querySelectorAll('.carro');
    carros.forEach(carro => {
      carro.style.display = (tipo === 'todos' || carro.dataset.tipo === tipo) ? 'block' : 'none';
    });
  }
  
  // Filtra os carros por marca
  function filtrarCarrosPorMarca(marca) {
    const carros = document.querySelectorAll('.carro');
    carros.forEach(carro => {
      const textoCarro = carro.querySelector('h2').innerText.toLowerCase();
      carro.style.display = textoCarro.includes(marca) ? 'block' : 'none';
    });
  }
  
  // Exibe os detalhes de um carro
  function mostrarDetalhesCarro(nomeCarro) {
    const carro = obterDetalhesCarro(nomeCarro);
    document.getElementById('detalhes-titulo').innerText = carro.nome;
    document.getElementById('detalhes-ano').innerText = "Ano: " + carro.ano;
    document.getElementById('detalhes-descricao').innerText = carro.descricao;
    document.getElementById('detalhes-vantagens').innerText = "Vantagens: " + carro.vantagens;
    document.getElementById('detalhes').style.display = 'block';
  }
  
  // Fecha a janela de detalhes
  function fecharDetalhes() {
    document.getElementById('detalhes').style.display = 'none';
  }
  
  // Retorna os detalhes do carro com base no nome (incluindo imagem)
  function obterDetalhesCarro(nomeCarro) {
    const detalhes = {
      // Genéricos
      'Carro Sedan': {
        nome: 'Carro Sedan',
        ano: 2022,
        descricao: 'Sedan confortável e versátil para o dia a dia.',
        vantagens: 'Bom espaço interno e economia de combustível.',
        imagem: './img/.jpg'
      },
      'Carro SUV': {
        nome: 'Carro SUV',
        ano: 2021,
        descricao: 'SUV robusto e espaçoso, ideal para aventuras.',
        vantagens: 'Amplo espaço e tração 4x4.',
        imagem: './img/.jpg'
      },
      'Carro Esportivo': {
        nome: 'Carro Esportivo',
        ano: 2020,
        descricao: 'Desportivo com performance de tirar o fôlego.',
        vantagens: 'Alto desempenho e design arrojado.',
        imagem: './img/.jpg'
      },
      // Toyota
      'Toyota Corolla': {
        nome: 'Toyota Corolla',
        ano: 2023,
        descricao: 'Sedan com excelente eficiência de combustível e tecnologia avançada.',
        vantagens: 'Confiabilidade e baixo custo de manutenção.',
        imagem: './img/.jpg'
      },
      'Toyota Camry': {
        nome: 'Toyota Camry',
        ano: 2022,
        descricao: 'Sedan elegante com desempenho robusto e conforto excepcional.',
        vantagens: 'Conforto, design moderno e alta eficiência.',
        imagem: './img/.jpg'
      },
      // Honda
      'Honda CR-V': {
        nome: 'Honda CR-V',
        ano: 2021,
        descricao: 'SUV espaçoso com segurança e desempenho de primeira linha.',
        vantagens: 'Amplo espaço interno, tecnologia e segurança.',
        imagem: './img/.jpg'
      },
      'Honda Civic': {
        nome: 'Honda Civic',
        ano: 2022,
        descricao: 'Sedan compacto com design esportivo e dirigibilidade ágil.',
        vantagens: 'Eficiente, ágil e com bom custo-benefício.',
        imagem: './img/.jpg'
      },
      // Ford
      'Ford Mustang': {
        nome: 'Ford Mustang',
        ano: 2020,
        descricao: 'Esportivo icônico com potência e estilo inconfundíveis.',
        vantagens: 'Desempenho e design agressivo.',
        imagem: './img/FordMustang.png'
      },
      'Ford Fusion': {
        nome: 'Ford Fusion',
        ano: 2021,
        descricao: 'Sedan confortável com tecnologia moderna, ideal para famílias.',
        vantagens: 'Conforto, tecnologia e boa performance.',
        imagem: './img/.jpg'
      },
      // Jeep
      'Jeep Compass': {
        nome: 'Jeep Compass',
        ano: 2022,
        descricao: 'SUV compacto com design robusto e desempenho off-road moderado.',
        vantagens: 'Versatilidade e tecnologia embarcada.',
        imagem: './img/.jpg'
      },
      'Jeep Renegade': {
        nome: 'Jeep Renegade',
        ano: 2023,
        descricao: 'SUV compacto com estilo diferenciado e ótima para a cidade.',
        vantagens: 'Agilidade urbana e design icônico.',
        imagem: './img/.jpg'
      },
      // Chevrolet
      'Chevrolet Camaro': {
        nome: 'Chevrolet Camaro',
        ano: 2020,
        descricao: 'Esportivo com design agressivo e desempenho impressionante.',
        vantagens: 'Performance e estilo marcante.',
        imagem: './img/.jpg'
      },
      'Chevrolet Cruze': {
        nome: 'Chevrolet Cruze',
        ano: 2021,
        descricao: 'Sedan compacto com economia de combustível e tecnologia.',
        vantagens: 'Eficiência e baixo custo de manutenção.',
        imagem: './img/.jpg'
      },
      // Audi
      'Audi A4': {
        nome: 'Audi A4',
        ano: 2021,
        descricao: 'Sedan premium com tecnologia avançada e acabamento de luxo.',
        vantagens: 'Conforto, tecnologia e design sofisticado.',
        imagem: './img/.jpg'
      },
      // BMW
      'BMW 320i': {
        nome: 'BMW 320i',
        ano: 2022,
        descricao: 'Sedan com performance dinâmica e interior luxuoso.',
        vantagens: 'Desempenho, luxo e tecnologia de ponta.',
        imagem: './img/.jpg'
      },
      // Nissan
      'Nissan X-Trail': {
        nome: 'Nissan X-Trail',
        ano: 2022,
        descricao: 'SUV versátil com amplo espaço e tecnologia embarcada.',
        vantagens: 'Versatilidade, espaço e eficiência.',
        imagem: './img/.jpg'
      },
      'Nissan Sentra': {
        nome: 'Nissan Sentra',
        ano: 2023,
        descricao: 'Sedan com excelente custo-benefício e conforto para o dia a dia.',
        vantagens: 'Econômico, confortável e confiável.',
        imagem: './img/.jpg'
      },
      // Porsche
      'Porsche 911': {
        nome: 'Porsche 911',
        ano: 2021,
        descricao: 'Esportivo de alta performance com design icônico.',
        vantagens: 'Performance, design e exclusividade.',
        imagem: './img/.jpg'
      }
    };
    
    return detalhes[nomeCarro] || {
      nome: nomeCarro,
      ano: 'N/A',
      descricao: 'Detalhes não disponíveis para este carro.',
      vantagens: 'N/A',
      imagem: ''
    };
  }
  
  // Ao clicar em "Agendar Test Drive", preenche o campo, atualiza a imagem e faz scroll até o formulário
  function agendarTestDrive(carro) {
    document.getElementById('carro').value = carro;
    const detalhes = obterDetalhesCarro(carro);
    const imgCarro = document.getElementById('imagem-carro');
    if(detalhes.imagem) {
      imgCarro.src = detalhes.imagem;
      imgCarro.style.display = 'block';
    } else {
      imgCarro.style.display = 'none';
    }
    document.getElementById('form-agendamento').scrollIntoView({ behavior: "smooth" });
  }
  
  // Exibe todos os carros ao carregar a página
  window.onload = () => {
    filtrarCarros('todos');
  };
  