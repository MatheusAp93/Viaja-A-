function criarDiaIdeal() {
  var city = document.getElementById('city').value;
  var morning = document.getElementById('morning').value;
  var afternoon = document.getElementById('afternoon').value;
  var evening = document.getElementById('evening').value;

  var sugestaoDestino = `Seu dia ideal em ${city} incluiria:`;

  sugestaoDestino += ` Manhã: ${getActivityName(morning, city)}.`;
  sugestaoDestino += ` Tarde: ${getActivityName(afternoon, city)}.`;
  sugestaoDestino += ` Noite: ${getActivityName(evening, city)}.`;

  document.getElementById('diaIdeal').innerHTML = sugestaoDestino;
  document.getElementById('resultado').style.display = "block";
}

function getActivityName(activity, city) {
  switch (city) {
    case 'NY':
      switch (activity) {
        case 'coffee':
          return 'Desfrutar de um Café em Brooklyn';
        case 'shopping':
          return 'Compras na Quinta Avenida, Nova York';
        case 'museum':
          return 'Visitar o Museu de Arte Metropolitano em Nova York';
        case 'park':
          return 'Passeio no Central Park, Nova York';
        case 'culture':
          return 'Passeio pela Estátua da Liberdade e Ellis Island com acesso ao pedestal';
        case 'dinner':
          return 'Jantar no Restaurante Itliano Olio e Più em Manhattan';
        case 'shows':
          return 'Assistir a um Show da Broadway em Nova York';
        case 'bar':
          return 'Visitar o McSorleys Old Ale House ';
        default:
          return 'Atividade não especificada';
      }
    case 'Paris':
      switch (activity) {
        case 'coffee':
          return 'Desfrutar de um Café no Le Pain Quotidien';
        case 'shopping':
          return 'Compras na Galeries Lafayette';
        case 'museum':
          return 'Visitar o Museu do Louvre em Paris';
        case 'park':
          return 'Passeio no Jardim des Tuileries, Paris';
        case 'culture':
          return 'Explorar a Cultura Local em Montmartre, Paris';
        case 'dinner':
          return 'Jantar em um Bistrô em Lyon';
        case 'shows':
          return 'Assistir a um Espetáculo no Moulin Rouge, Paris';
        case 'bar':
          return 'Visitar um Bar Local em Saint-Germain-des-Prés, Paris';
        default:
          return 'Atividade não especificada';
      }
    case 'Buenos Aires':
      switch (activity) {
        case 'coffee':
          return 'Desfrutar de um Café na cafeteria La Biela';
        case 'shopping':
          return 'Compras no shopping Galerías Pacífico';
        case 'museum':
          return 'Visitar o Museu Nacional de Belas Artes em Buenos Aires';
        case 'park':
          return 'Passeio no Bosques de Palermo';
        case 'culture':
          return 'Explorar a Cultura Local em San Telmo, Buenos Aires';
        case 'dinner':
          return 'Jantar em uma Parrilla em Buenos Aires';
        case 'shows':
          return 'Assistir a um Show de Tango em Buenos Aires';
        case 'bar':
          return 'Visitar um Bar Local em Palermo Soho, Buenos Aires';
        default:
          return 'Atividade não especificada';
      }
    default:
      return 'Atividade não especificada';
  }
}