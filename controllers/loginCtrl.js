const User = require('../entities/user');

// function to handle login logic
async function checkLogin(req, res) {
    const { email, password } = req.body;
    const user = new User(email, password);
    const isAuthenticated = await user.checkLogin();
    
    if (isAuthenticated) {
        res.status(200).json({ message: 'Login successful' });
    }

    else {
        res.status(401).json({ message: 'Invalid credentials!'});
    }
}

module.exports = {
    checkLogin
};