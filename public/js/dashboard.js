
function carregamentoInicial() {
  const carregamento = document.getElementById('carregamento');
  const conteudoPrincipal = document.getElementById('conteudoPrincipal');

  conteudoPrincipal.style.display = 'flex';

  carregamento.classList.add('sumir');

  setTimeout(() => {
    carregamento.style.display = 'none';
    conteudoPrincipal.classList.add('aparecer');
  }, 1000); // 1 segundos de atraso
}

// Chama a função após um pequeno atraso (2 segundos)
setTimeout(carregamentoInicial, 1500);


function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

function obterTotalFavoritos() {
  fetch('/dashboard/obterTotalFavoritos').then(resposta => {
    if (resposta.ok) {
      resposta.json().then(favoritos => {
        console.log(`favoritos recebidos: ${JSON.stringify(favoritos)}`);

        // Aqui você pode processar os dados recebidos e chamar a função para plotar o gráfico
        plotarGraficoFavoritos(favoritos);
      });
    } else {
      console.error('Erro ao obter dados do dashboard:', resposta.statusText);
    }
  }).catch(error => {
    console.error('Erro na requisição:', error);
  });
}


function obterTotalFavoritosTotais() {
  fetch('/dashboard/obterTotalFavoritosTotais').then(resposta => {
    if (resposta.ok) {
      resposta.json().then(favoritosTotais => {
        console.log(`favoritos totais recebidos: ${JSON.stringify(favoritosTotais)}`);

        const totalFavoritos = document.getElementById('totalFavoritos');
        totalFavoritos.innerHTML = favoritosTotais[0].total_favoritos_totais;
      });
    } else {
      console.error('Erro ao obter dados do dashboard:', resposta.statusText);
    }
  }).catch(error => {
    console.error('Erro na requisição:', error);
  });
}

function obterPorcentagemTipos() {
  fetch('/dashboard/obterPorcentagemTipos').then(resposta => {
    if (resposta.ok) {
      resposta.json().then(tipos => {
        console.log(`tipos recebidos: ${JSON.stringify(tipos)}`);

        // Aqui você pode processar os dados recebidos e chamar a função para plotar o gráfico
        plotarGraficoTipos(tipos);
      });
    } else {
      console.error('Erro ao obter dados do dashboard:', resposta.statusText);
    }
  }).catch(error => {
    console.error('Erro na requisição:', error);
  });
}

function obterTotalUsuarios() {
  fetch('/usuarios/obterTotalUsuarios').then(resposta => {
    if (resposta.ok) {
      resposta.json().then(usuarios => {
        console.log(`Usuários recebidos: ${JSON.stringify(usuarios)}`);

        const totalUsuarios = document.getElementById('totalUsuarios');
        totalUsuarios.innerHTML = usuarios[0].total_usuarios;
      });
    } else {
      console.error('Erro ao obter dados do dashboard:', resposta.statusText);
    }
  }).catch(error => {
    console.error('Erro na requisição:', error);
  });
}

function obterNomeMaisFavoritado() {
  fetch('/dashboard/obterNomeMaisFavoritado').then(resposta => {
    if (resposta.ok) {
      resposta.json().then(nomeFavoritado => {
        console.log(`Nome mais favoritado recebido: ${JSON.stringify(nomeFavoritado)}`);

        const nomeMaisFavoritado = document.getElementById('nomeFavoritado');
        nomeMaisFavoritado.innerHTML = nomeFavoritado[0].apelido;
      });
    }
    else {
      console.error('Erro ao obter dados do dashboard:', resposta.statusText);
    }
  }).catch(error => {
    console.error('Erro na requisição:', error);
  });
}

function plotarGraficoFavoritos(favoritos) {

  const nomes = [];
  const DadosFavoritos = [];

  for (var i = 0; i < favoritos.length; i++) {
    nomes.push(favoritos[i].apelido);
    DadosFavoritos.push(favoritos[i].total_favoritos);
  }


  const ctx = document.getElementById('TotalFavoritos').getContext('2d');
  const TotalFavoritos = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nomes,
      datasets: [{
        label: 'Quantidade de Favoritos',
        data: DadosFavoritos, // Exemplo de dados
        borderWidth: 1
      }]
    },
    options: {
      backgroundColor: 'red',
      borderColor: 'white',
      barThickness: 90,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white',
            font: {
              size: 12
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        x: {
          ticks: {
            color: 'white',
            font: {
              size: 12
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
            font: {
              size: 17
            }
          },

        },
        title: {
          display: true,
          text: 'Gráfico de Favoritos dos Personagens',
          color: 'red',
          font: {
            size: 20
          }
        }

      },
    }
  });
}

function plotarGraficoTipos(tipos) {

  const nomes = [];
  const DadosTipos = [];

  var qtdTotal = tipos[0].quantidade + tipos[1].quantidade;



  for (var i = 0; i < tipos.length; i++) {
    nomes.push(tipos[i].tipo);
    DadosTipos.push((tipos[i].quantidade / qtdTotal * 100).toFixed(1));
  }

  const ctx = document.getElementById('TotalTipos').getContext('2d');
  const TotalTipos = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: nomes,
      datasets: [{
        label: 'Quantidade de Personagens por Tipo',
        data: DadosTipos,
        backgroundColor: ['red', 'orange'],
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
            font: {
              size: 17
            }
          }
        },
        title: {
          display: true,
          text: 'Gráfico de Personagens Favoritados por Tipo',
          color: 'red',
          maintainAspectRatio: true,
          font: {
            size: 20
          }
        }
      }
    }
  });
}