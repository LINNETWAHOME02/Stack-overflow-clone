import express from "express";

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch('/post/:id', auth, postAnswer) //patch request is used to update the database
router.patch('/delete/:id', auth, deleteAnswer)

export default router