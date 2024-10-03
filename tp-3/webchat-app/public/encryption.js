function encryptMessage(message) {
    const secretKey = 'secret-key'; // intended key for encryption/decryption
    const encrypted = CryptoJS.AES.encrypt(message, secretKey);
    return encrypted.toString();
}

function decryptMessage(encryptedMessage) {
    const secretKey = 'secret-key'; // has to be equal to key provided above (on line 2)
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedMessage) {
        throw new Error('Decrypted message is empty.');
    }
    
    return decryptedMessage;
}
