import express, { Application } from 'express';
import todoRoutes from './routes/todoRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
