document.getElementById('encryptButton').addEventListener('click', 
function() {
    let message = document.getElementById('inputMessage').value;
    let encryptedMessage = btoa(message); // Codifica a mensagem em base64
    
    document.getElementById('outputMessage').innerText = encryptedMessage;
    document.querySelector('.intercepted-message').innerText = "não consegui"; // Hacker não consegue ler
    document.querySelector('.received-message').innerText = encryptedMessage;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let encryptedMessage = document.getElementById('inputMessage').value;
    try {
        let decryptedMessage = atob(encryptedMessage); // Decodifica a mensagem de base64
        document.getElementById('outputMessage').innerText = decryptedMessage;
        document.querySelector('.intercepted-message').innerText = "não consegui"; // Hacker não consegue ler
        document.querySelector('.received-message').innerText = decryptedMessage;
    } catch (e) {
        document.querySelector('.intercepted-message').innerText = "não consegui";
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputMessage = document.getElementById('outputMessage').innerText;
    navigator.clipboard.writeText(outputMessage).then(function() {
        alert('Mensagem copiada para a área de transferência');
    }, function() {
        alert('Falha ao copiar a mensagem');
    });
});

document.getElementById('encryptReceivedButton').addEventListener('click', function() {
    let message = document.getElementById('receivedMessage').value;
    let encryptedMessage = btoa(message); // Codifica a mensagem em base64
    document.getElementById('receivedMessage').value = encryptedMessage;
});

document.getElementById('decryptReceivedButton').addEventListener('click', function() {
    let encryptedMessage = document.getElementById('receivedMessage').value;
    let decryptedMessage = atob(encryptedMessage); // Decodifica a mensagem cde base64
    document.getElementById('receivedMessage').value = decryptedMessage;
});
