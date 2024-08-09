import express from "express";
import {
  createNewAttendee,
  deleteAttendee,
  getAttendees,
  updateAttendee,
} from "../controllers/attendeeController.js";
import { validateAttendee } from "../middlewares/validateAttendeeBody.js";
import { validateIdParam } from "../middlewares/validateIdParam.js";
import { validateToken } from "../middlewares/validateToken.js";

const router = express.Router();

router.get("/attendees", getAttendees);

router.post("/attendees", validateAttendee, createNewAttendee);

router.put("/attendees/:id", validateIdParam, validateAttendee, updateAttendee);

router.delete("/attendees/:id", validateIdParam, deleteAttendee);

export default router;
