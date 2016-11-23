module.exports = function(app) {
  var passport = require('passport');
  var GithubStrategy = require('passport-github').Strategy;
  var session = require('express-session');

  app.use(session({
    secret: 'myVerySecretKey',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new GithubStrategy({
    clientID: '861224f10cd7e69214d7',
    clientSecret: 'debced4c0a162eaba0e811f4fefee5ea7bf433de',
    callbackURL: 'http://localhost:8080/auth/callback'
  }, function(accessToken, refreshToken, profile, done) {
    done(null, {
      accessToken: accessToken,
      profile: profile
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  app.get('/auth/error', function(req, res) {
    res.send('Login Failed');
  });
  app.get('/auth/callback',
    passport.authenticate('github', {failureRedirect: '/auth/error'}),
    function(req, res) {
      res.redirect('/');
    }
  );
  app.get('/auth', passport.authenticate('github'));
}

