
import { HttpError } from './http-error';

const defaultStructure = ({ error }) => ({ error });

export const errorHandler = (structure = defaultStructure) => {
	return ({ req, res, error }) => {
		const httpError = error instanceof HttpError ? error : new HttpError(500, error);
		const payload = structure({ req, res, error });

		res.statusCode = error.statusCode;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(payload));

		return { req, res };
	};
};
