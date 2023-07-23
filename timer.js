// Função para formatar o tempo com zeros à esquerda quando necessário
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Função para calcular o countup
function countUp() {
  const startDate = new Date(2022, 6, 23, 23, 30, 0); // Mês é indexado de 0 a 11 (julho é 6)

  const currentDate = new Date();
  const timeDifference = currentDate - startDate;

  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const years = Math.floor(timeDifference / (oneDay * 365.25));
  const months = Math.floor((timeDifference % (oneDay * 365.25)) / (oneDay * 30.44));
  const days = Math.floor((timeDifference % (oneDay * 30.44)) / oneDay);
  const hours = Math.floor((timeDifference % oneDay) / oneHour);
  const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
  const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

  const countupElement = document.getElementById('countup');
  countupElement.textContent = `\n${years} anos, ${months} meses, ${days} dias, ${formatTime(hours)} horas, ${formatTime(minutes)} minutos, ${formatTime(seconds)} segundos.`;
}

// Atualizar o contador a cada segundo
setInterval(countUp, 1000);

// Executar a função inicialmente para mostrar o tempo passado desde o momento da abertura da página
countUp();
