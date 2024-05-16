import { sql } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "../db/connection";

const removeTable = async (req: Request, res: Response) => {
  let tableName = req.body.tableName;

  await db.execute(sql.raw(`drop table ${tableName};`));

  return res.status(200).json({ message: "removed table" });
};

export default removeTable;
