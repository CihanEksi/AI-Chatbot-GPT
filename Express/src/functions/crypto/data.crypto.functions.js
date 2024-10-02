const CryptoJS = require('crypto-js');
const { DATA_SECRET } = require('../../constants/config.constants');

const stringEncrypt = (plainText) => {
    try {
        const encryptedData = CryptoJS.AES.encrypt(plainText, DATA_SECRET).toString();
        return encryptedData;
    } catch (error) {
        throw new Error('DATA_ENCRYPTION_ERROR');
    }
}

const stringDecrypt = (data) => {
    try {
        const decryptedData = CryptoJS.AES.decrypt(data, DATA_SECRET).toString(CryptoJS.enc.Utf8);
        return decryptedData;
    } catch (error) {
        throw new Error('DATA_DECRYPTION_ERROR');
    }
}

const dataEncrypt = (data) => {
    if (typeof data !== 'object') {
        throw new Error('Data must be an object!');
    }

    data = JSON.stringify(data);
    const encryptedData = stringEncrypt(data);

    return encryptedData;
}


const dataDecrypt = (data) => {
    const decryptedData = stringDecrypt(data);
    decryptedData = JSON.parse(decryptedData);
    return decryptedData;
}

module.exports = {
    dataEncrypt,
    dataDecrypt,
    stringEncrypt,
    stringDecrypt,
}