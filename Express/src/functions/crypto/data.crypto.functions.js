const bcrypt = require('bcrypt');
const { DATA_SECRET } = require('../../constants/config.constants');

const dataEncrypt = (data) => {

    if (typeof data !== 'object') {
        throw new Error('Data must be an object!');
    }

    try {
        data = JSON.stringify(data);
        const encryptedData = bcrypt.hashSync(data, DATA_SECRET);
        return encryptedData;
    } catch (error) {
        console.log(error, 'error');
        throw new Error('DATA_ENCRYPTION_ERROR');
    }

}


const dataDecrypt = (data) => {
    try {
        const decryptedData = bcrypt.compareSync(data, DATA_SECRET);
        decryptedData = JSON.parse(decryptedData);
        return decryptedData;
    } catch (error) {
        console.log(error, 'error');
        throw new Error('DATA_DECRYPTION_ERROR');
    }
}

module.exports = {
    dataEncrypt,
    dataDecrypt
}