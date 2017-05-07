# kong-admin-client [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A simple and dumb kong api wrapper

## Installation

```sh
$ npm install --save @eoko/kong-client
$ yarn add @eoko/kong-client
```

## Usage

```js
const Kong = require('@eoko/kong-client');
const kong = new Kong('http://localhost:8001');

kong
  .get('/consumers')
  .then(res => console.log(res))
  .catch(err => console.log(err));
```
## License

MIT © [Romain DARY &lt;romain.dary@eoko.fr&gt;](http://eoko.fr)


[npm-image]: https://badge.fury.io/js/kong-admin-client.svg
[npm-url]: https://npmjs.org/package/kong-admin-client
[travis-image]: https://travis-ci.org/iam-merlin/kong-admin-client.svg?branch=master
[travis-url]: https://travis-ci.org/iam-merlin/kong-admin-client
[daviddm-image]: https://david-dm.org/iam-merlin/kong-admin-client.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/iam-merlin/kong-admin-client
[coveralls-image]: https://coveralls.io/repos/iam-merlin/kong-admin-client/badge.svg
[coveralls-url]: https://coveralls.io/r/iam-merlin/kong-admin-client
