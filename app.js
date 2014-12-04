var

  /** express server module */
  express = require('express'),

  /** express server instance */
  app = express(),

  /**
   * port to listen on
   * @type {Number}
   */
  PORT = process.env.PORT || process.argv[2] || 3000,

  /**
   * url to redirect users to
   * @type {String}
   */
  REDIRECT = 'http://google.com';

// catch all requests
app.get('*', function(req, res) {
  // redirect to google
  res.redirect(REDIRECT);
});

// listen for requests
app.listen(PORT);
console.log('Server listening on port: ' + PORT + '.');