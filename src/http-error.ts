
import { STATUS_CODES } from 'http';

export class HttpError {
	public readonly statusCode: number;
	public readonly statusMessage: string;
	public readonly message: string;
	public readonly meta: object;

	constructor(status: number, message: string | Error, meta?: object) {
		this.statusCode = status;
		this.statusMessage = STATUS_CODES[status];
		this.message = message instanceof Error ? message.message : message;
		this.meta = meta;
	}

	toString() {
		return `[HttpError ${this.statusCode} ${this.statusMessage}]`;
	}
}
