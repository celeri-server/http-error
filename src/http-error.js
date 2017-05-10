
import { STATUS_CODES } from 'http';

export class HttpError {
	constructor(status, message, meta) {
		this.statusCode = status;
		this.statusMessage = STATUS_CODES[status];
		this.message = message;
		this.meta = meta;
	}

	toString() {
		return `[HttpError ${this.statusCode} ${this.statusMessage}]`;
	}
}
