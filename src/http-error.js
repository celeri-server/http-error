
import { STATUS_CODES } from 'http';

export class HttpError {
	constructor(status, message) {
		this.statusCode = status;
		this.statusMessage = STATUS_CODES[status];
		this.message = message;
	}

	toString() {
		return `[HttpError ${this.statusCode} ${this.statusMessage}]`;
	}
}
