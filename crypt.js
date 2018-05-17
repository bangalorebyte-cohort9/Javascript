var crypto = require('crypto')
var encrypt = function (data) {
    var cipher = crypto.createCipher('aes-256-ecb', data)
    cipher.update(data, 'utf8')
    return cipher.final('hex')
}

d = encrypt("a")
console.log(d)