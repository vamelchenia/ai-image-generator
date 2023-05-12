'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var controllers_1 = require('./controllers');
var pages_1 = require('./pages');
var app = express_1.default();
var port = Number(process.env.PORT) || 3000;

// Serve static files from the 'pages' directory
// app.use(express_1.default.static('pages'));
// app.use(express_1.default.static('res'));
app.use(express_1.static('pages'));
app.use(express_1.static('res'));
app.use('/welcome', controllers_1.WelcomeController);
// app.use('/welcome', pages_1.WelcomeController);
app.listen(port, function () {
  console('process.env.port = ' + port);
  console('process.env.HUGGING_API_KEY = ' + process.env.HUGGING_API_KEY);
  console.log('Listening at http://localhost:' + port + '/');
});
