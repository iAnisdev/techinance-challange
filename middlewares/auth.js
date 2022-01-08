function isLoggedIn(req, res, next) {
    if (req.cookies['auth_status'] == 'login') {
        return next();
    } else {
        req.flash('error', 'Please Login first')
        res.redirect('/login')
    }
}

function isLoggedOut(req, res, next) {
    if (req.cookies['auth_status'] === undefined || req.cookies['auth_status'] == 'logout') {
        return next();
    } else {
        res.redirect('/');
    }
}

module.exports = {
    isLoggedIn,
    isLoggedOut
}