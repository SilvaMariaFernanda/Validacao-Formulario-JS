// Aguarda o carregamento completo da página antes de executar a função principal
window.addEventListener("load", paginacarregada);

function paginacarregada() {
    // Referências aos elementos do formulário e mensagens de erro
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");
    let numCaracteres = document.getElementById("numCaracteres");
    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroMensagem = document.getElementById("erroMensagem");
    let enviarForm = document.getElementById("enviarForm");

    // ----------- Validação do campo "nome" -----------

    // Quando o campo nome recebe foco, muda a cor da borda e o fundo
    function focusNome() {
        nome.style.borderColor = '#007bff';
        nome.style.backgroundColor = '#f8f8f8';
    }

    // Quando o campo nome perde o foco, verifica se está vazio
    function validarNome() {
        if (nome.value.length < 1) {
            // Campo vazio: exibe mensagem de erro e estiliza o campo com vermelho
            nome.style.borderColor = 'red';
            nome.style.backgroundColor = 'white';
            erroNome.style.display = 'flex';
            erroNome.innerText = "Este campo é obrigatório.";
        } else {
            // Campo preenchido corretamente: remove erro e estiliza com verde
            erroNome.style.display = 'none';
            nome.style.borderColor = 'green';
            nome.style.backgroundColor = 'white';
        }
    }

    // Verificação inicial de validade do campo nome
    const nomeValido = nome.value.length > 0;

    // ----------- Validação do campo "email" -----------

    // Estiliza o campo email ao receber foco
    function focusEmail() {
        email.style.borderColor = '#007bff';
        email.style.backgroundColor = '#f0f0f0';
    }

    // Valida o email ao perder o foco
    function validarEmail() {
        if (email.value.length < 1) {
            // Email vazio: exibe erro
            email.style.borderColor = 'red';
            email.style.backgroundColor = 'white';
            erroEmail.style.display = 'flex';
            erroEmail.innerText = "Este campo é obrigatório.";
        } else if (email.value.includes("@")) {
            // Email válido: remove erro
            erroEmail.style.display = 'none';
            email.style.borderColor = 'green';
            email.style.backgroundColor = 'white';
        } else {
            // Email sem "@": exibe erro de e-mail inválido
            erroEmail.innerText = "Este e-mail é inválido.";
            erroEmail.style.display = 'flex';
            email.style.borderColor = 'red';
            email.style.backgroundColor = 'white';
        }
    }

    // Verificação inicial de validade do email (não muito confiável aqui)
    const emailValido = email.value.length > 0 || email.value.includes("@");

    // ----------- Validação do campo "mensagem" -----------

    // Estiliza o campo mensagem ao receber foco
    function focusMensagem() {
        mensagem.style.borderColor = '#007bff';
        mensagem.style.backgroundColor = '#f0f0f0';
    }

    // Valida o conteúdo do campo mensagem
    function validarMensagem() {
        if (mensagem.value < 1) {
            // Campo vazio: exibe erro
            erroMensagem.style.display = 'flex';
            erroMensagem.innerHTML = "Este campo é obrigatório.";
            mensagem.style.borderColor = 'red';
            mensagem.style.backgroundColor = 'white';
        } else {
            // Campo preenchido: remove erro
            erroMensagem.style.display = 'none';
            mensagem.style.borderColor = 'green';
            mensagem.style.backgroundColor = '#e8f0fe';
        }
    }

    // Verificação inicial de validade da mensagem
    const mensagemValida = mensagem.value.length > 0;

    // ----------- Função de envio do formulário -----------

    function enviarFormulario(event) {
        event.preventDefault(); // Impede o envio automático do formulário

        // Executa as funções de validação
        validarNome();
        validarEmail();
        validarMensagem();

        // Verifica se todos os campos estão válidos
        if (nomeValido && emailValido && mensagemValida) {
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Preencha todos os campos corretamente!");
        }
    }

    // ----------- Contador de caracteres na mensagem -----------

    mensagem.addEventListener('input', () => {
        let contador = mensagem.value.length; 
        numCaracteres.innerHTML = `${contador}`;
    });

    // ----------- Eventos de foco e validação -----------

    nome.addEventListener('focus', focusNome);
    nome.addEventListener('blur', validarNome);

    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', validarEmail);

    mensagem.addEventListener('focus', focusMensagem);
    mensagem.addEventListener('blur', validarMensagem);

    // Evento para o envio do formulário
    enviarForm.addEventListener('submit', enviarFormulario);
}
