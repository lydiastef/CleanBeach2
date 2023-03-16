import express from 'express';
import { userRouter } from './src/routes/user.routes';
import { beachRouter } from './src/routes/beach.routes';
import { eventRouter } from './src/routes/event.routes';
import { reviewRouter } from './src/routes/review.routes';
import { PrismaClient } from '@prisma/client'
import { participantsListRouter } from './src/routes/participantsList.routes';
import cors from "cors";

const prisma = new PrismaClient()

const app = express();
app.use(express.json())
app.use(cors())

// Initialize routes
userRouter(app);
beachRouter(app);
eventRouter(app);
reviewRouter(app);
participantsListRouter(app);

const PORT = process.env.PORT || 27017

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;