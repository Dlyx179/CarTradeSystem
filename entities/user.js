const db = require('config/db.js');
const bcrypt = require('bcrypt');

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // method to check login credentials
    async checkLogin() {
        const query = 'SELECT password_hash FROM User WHERE email = ?';
        const results = await db.query(query, [this.email]);

        if (results.length === 0) {
            return false; // user not found
        }

        const hashedPassword = results[0].password_hash;

        // compare the stored hash with the provided password
        const isMatch = await bcrypt.compare(this.password, hashedPassword);
        return isMatch;


    }
    

}

module.exports = User;

