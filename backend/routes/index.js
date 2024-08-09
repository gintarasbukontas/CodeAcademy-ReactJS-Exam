import express from "express";
import accountRouter from "./accountRouter.js";
import attendeeRouter from "./attendeeRouter.js";

const router = express.Router();

router.use(accountRouter);
router.use(attendeeRouter);

export default router;
