
import { HttpError } from './http-error';

const defaultStructure = ({ error }) => ({ error: error.message });

export const errorHandler = (structure = defaultStructure) => {
	return ({ req, res, error }) => {
		const httpError = error instanceof HttpError ? error : new HttpError(500, error);
		const payload = structure({ req, res, error: httpError });

		res.statusCode = httpError.statusCode;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(payload));
	};
};
