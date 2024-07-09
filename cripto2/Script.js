function criptografar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    const mensagem = textarea.value;
    const mensagemCriptografada = btoa(mensagem); // Simples criptografia base64
    textarea.value = mensagemCriptografada;
}

function descriptografar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    const mensagem = textarea.value;
    try {
        const mensagemDescriptografada = atob(mensagem);
        textarea.value = mensagemDescriptografada;
    } catch (e) {
        alert("Não foi possível descriptografar a mensagem");
    }
}

function limpar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    textarea.value = '';
}

function enviar(usuario) {
    const mensagem = document.getElementById(`mensagem-${usuario}`).value;
    const hackerAlerta = document.getElementById('hacker-alerta');

    if (usuario === 'homem') {
        hackerAlerta.style.display = 'block';
        setTimeout(() => {
            hackerAlerta.style.display = 'none';
            document.getElementById('mensagem-mulher').value = mensagem;
        }, 2000);
    } else if (usuario === 'mulher') {
        hackerAlerta.style.display = 'block';
        setTimeout(() => {
            hackerAlerta.style.display = 'none';
            document.getElementById('mensagem-homem').value = mensagem;
        }, 2000);
    }
}


