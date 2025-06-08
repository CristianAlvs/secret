$(document).ready(function() {
  $('.buttonConfirm').on('click', function() {
    mostrarToast(`
        <div class="toast-message">
            <h4>Então o que está esperando?</h4>
            <br />
            Me ligue, <br /> dizendo "eu aceito!"
        </div>
    `);
  });

  $('.buttonEnter').on('click', function() {
    entrar();
  });

  // Função para mostrar o Toast Message
  function mostrarToast(toast, duration = 10000) {
    // Cria um novo elemento div para o toast
    const $toast = $(toast);

    // Adiciona o toast ao container
    $('#toast-container').append($toast);

    // Usa setTimeout para adicionar a classe 'show' após um pequeno atraso
    // Isso é necessário para que a transição CSS funcione (garante que a opacidade 0 seja renderizada antes do 1)
    setTimeout(() => {
      $toast.addClass('show');
    }, 10); // Pequeno atraso

    // Configura o tempo para o toast desaparecer
    setTimeout(() => {
      $toast.removeClass('show'); // Inicia a transição de saída

      // Remove o toast do DOM após a transição de saída
      // A duração da transição no CSS é 0.5s (500ms)
      setTimeout(() => {
        $toast.remove();
      }, 500); // Tempo igual ou maior que a duração da transição
    }, duration); // O toast ficará visível por 3 segundos (3000ms)
  }

  function entrar() {
    let acronyms = $('#acronyms').val();
    let code = $('#accessCode').val();

    if (code === '1210202401012025' && acronyms === 'AC') {
      $(".loginContent").addClass('hidden');
      $(".finishContent").removeClass('hidden');
    } else {
        mostrarToast(`
            <div class="toast-message">
                Acesso negado!
            </div>
        `, duration = 1000);
    }
  }
});