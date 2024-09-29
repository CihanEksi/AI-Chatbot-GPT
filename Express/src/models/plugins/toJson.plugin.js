const toJsonPlugin = (schema) => {
    schema.methods.toJSON = function () {
        const obj = this.toObject();
        const objKeys = Object.keys(obj);
        
        objKeys.forEach(key => {
            if (key.includes('__')) {
                delete obj[key];
            }
        });

        return obj;
    }
}

module.exports = toJsonPlugin;