
import { HttpError } from './http-error';
import { ErrorMiddlewareFunction } from '@celeri/middleware-pipeline';
import { MiddlewareInput } from '@celeri/http-server';

export interface ErrorResponseStructure {
	(options: MiddlewareInput & { error: HttpError }): object;
}

const defaultStructure: ErrorResponseStructure = ({ error }) => ({ error: error.message });

export const errorHandler = (structure = defaultStructure) : ErrorMiddlewareFunction<MiddlewareInput> => {
	return ({ req, res, error }) => {
		const httpError = error instanceof HttpError ? error : new HttpError(500, error);
		const payload = structure({ req, res, error: httpError });

		res.statusCode = httpError.statusCode;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(payload));
	};
};
