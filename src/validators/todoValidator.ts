import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

const todoSchema = yup.object().shape({
	title: yup.string().required(),
	completed: yup.boolean(),
});

export const todoValidate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		await todoSchema.validate(req.body, { abortEarly: false });
		next();
	} catch (error) {
		res.status(400).json({ message: 'Bad Request' });
	}
};
