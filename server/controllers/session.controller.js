import passport from 'passport';

export function createSession(req, res, next) {
  passport.authenticate('local', (err, user) => { // eslint-disable-line consistent-return
    if (err) { return next(err); }
    if (!user) {
      return res.status(401).send({ message: 'Invalid username or password.' });
    }

    req.logIn(user, (innerErr) => {
      if (innerErr) { return next(innerErr); }
      return res.json({
        email: req.user.email,
        username: req.user.username,
        preferences: req.user.preferences,
        verified: req.user.verified,
        id: req.user._id,
        totalSize: req.user.totalSize
      });
    });
  })(req, res, next);
}

export function getSession(req, res) {
  if (req.user) {
    return res.json({
      email: req.user.email,
      username: req.user.username,
      preferences: req.user.preferences,
      verified: req.user.verified,
      id: req.user._id,
      totalSize: req.user.totalSize
    });
  }
  return res.status(404).send({ message: 'Session does not exist' });
}

export function destroySession(req, res) {
  req.logout();
  res.json({ success: true });
}

