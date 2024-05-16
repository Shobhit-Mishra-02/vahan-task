import { Router } from "express";
import addRow from "../controllers/addRow";
import addTable from "../controllers/addTable";
import getRows from "../controllers/getRows";
import { greeting } from "../controllers/greeting";

// create routes here...

const router = Router();

// router.use(logMiddleware);
router.get("/", greeting);

router.post("/addTable", addTable);
router.get("/getRows/:tableName", getRows);
router.post("/addRow", addRow);

export default router;
