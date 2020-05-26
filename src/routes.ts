"use strict";

import { Response, Request, Router, NextFunction } from "express";

export const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "works" });
});
