// Não posso esquecer de incluir a biblioteca CryptoJS no HTML

// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

let mensagemOriginal = ''; // Variável para armazenar temporariamente a mensagem original

function criptografar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    mensagemOriginal = textarea.value.trim(); // Armazena a mensagem original antes de criptografar
    const mensagem = mensagemOriginal;

    // Verifica se a mensagem está vazia
    if (mensagem === '') {
        alert("A mensagem está vazia. Por favor, digite uma mensagem.");
        return;
    }

    const chave = 'minha-chave-secreta'; // Você deve usar uma chave segura e mantê-la protegida

    // Verifica se a mensagem já está criptografada
    try {
        const bytes = CryptoJS.AES.decrypt(mensagem, chave);
        const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);
        if (mensagemDescriptografada) {
            alert("A mensagem já está criptografada");
            return;
        }
    } catch (e) {
        // Se der erro, significa que a mensagem não está criptografada ainda, então podemos criptografar
    }

    const mensagemCriptografada = CryptoJS.AES.encrypt(mensagem, chave).toString();
    textarea.value = mensagemCriptografada;
}

function descriptografar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    const mensagem = textarea.value.trim(); // Remove espaços em branco no início e no fim
    const chave = 'minha-chave-secreta'; // Use a mesma chave usada para criptografar

    // Verifica se a mensagem está vazia
    if (mensagem === '') {
        alert("A mensagem está vazia. Por favor, digite uma mensagem.");
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(mensagem, chave);
        const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);
        if (mensagemDescriptografada) {
            textarea.value = mensagemDescriptografada;
        } else {
            throw new Error("Não foi possível descriptografar a mensagem");
        }
    } catch (e) {
        alert("Não foi possível descriptografar a mensagem");
    }
}

function limpar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    textarea.value = '';
}

function enviar(usuario) {
    const textarea = document.getElementById(`mensagem-${usuario}`);
    let mensagem = textarea.value.trim(); // Remove espaços em branco no início e no fim

    // Verifica se a mensagem está vazia
    if (mensagem === '') {
        alert("A mensagem está vazia. Por favor, digite uma mensagem.");
        return;
    }

    const chave = 'minha-chave-secreta'; // Você deve usar uma chave segura e mantê-la protegida
    const hackerAlerta = document.getElementById('hacker-alerta');

    // Verifica se a mensagem já está criptografada
    try {
        const bytes = CryptoJS.AES.decrypt(mensagem, chave);
        const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);
        // Se a descriptografia foi bem-sucedida, a mensagem não estava criptografada
        if (!mensagemDescriptografada) {
            mensagem = CryptoJS.AES.encrypt(mensagem, chave).toString();
        }
    } catch (e) {
        // Se der erro, significa que a mensagem não está criptografada ainda, então podemos criptografar
        mensagem = CryptoJS.AES.encrypt(mensagem, chave).toString();
    }

    if (usuario === 'homem') {
        hackerAlerta.style.display = 'block';
        setTimeout(() => {
            hackerAlerta.style.display = 'none';
            document.getElementById('mensagem-mulher').value = mensagem;

            // Limpa o campo textarea após enviar
            textarea.value = '';
        }, 2000);
    } else if (usuario === 'mulher') {
        hackerAlerta.style.display = 'block';
        setTimeout(() => {
            hackerAlerta.style.display = 'none';
            document.getElementById('mensagem-homem').value = mensagem;

            // Limpa o campo textarea após enviar
            textarea.value = '';
        }, 2000);
    }
}


