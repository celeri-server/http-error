
```bash
$ npm install --save @celeri/http-error
```



### Import

#### ES6 Modules

```javascript
import { HttpError, errorHandler } from '@celeri/http-error';
```

#### CommonJS Modules

```javascript
const { HttpError, errorHandler } = require('@celeri/http-error');
```



### Usage

```javascript
// Create error objects to represent what went wrong
const error = new HttpError(404, 'Could not find the requested document');

// Create your middleware with a processor that takes in an HttpError and returns
// a response payload
const errorMiddleware = errorHandler(({ error }) => ({
	error: error.message
}))
```
