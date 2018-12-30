import Express from 'express';
import bodyParcel from 'body-parcel';

const server = Express();
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());


server.use(Express.json());

const appVersion = '/api/v1';

// eslint-disable-next-line no-console
const port = process.env.PORT || 8080;
server.listen(port, () => console.log('server started successfuly! listening on port 8080'));

module.exports = app