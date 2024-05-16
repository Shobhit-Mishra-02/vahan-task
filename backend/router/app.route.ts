import { Router } from "express";
import addRow from "../controllers/addRow";
import addTable from "../controllers/addTable";
import getRows from "../controllers/getRows";
import { greeting } from "../controllers/greeting";
import getTables from "../controllers/getTables";
import removeTable from "../controllers/removeTable";

// create routes here...

const router = Router();

router.get("/", greeting);

router.post("/addTable", addTable);
router.get("/getRows/:tableName", getRows);
router.post("/addRow", addRow);
router.get("/getTables", getTables);
router.post("/removeTable", removeTable);

export default router;
