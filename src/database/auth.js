const connect = require('./db_connect');

const auth = (username, callback) => {
  const userCredentials = 'SELECT username, password, avatar_url FROM users WHERE username = $1;';
  connect.query(userCredentials, [username], (err, user) => {
    if (err || !user.rows[0]) { return callback(err ? 'Database error, sorry' : 'User not found'); }

    callback(null, user.rows[0]);
  });
};

module.exports = auth;
