import { Request, Response } from "express";
import { Tables, Feilds } from "../db/schema";
import { db } from "../db/connection";
import { sql } from "drizzle-orm";

const addRow = async (req: Request, res: Response) => {
  const tableName = req.body.tableName;
  const value = req.body.value as {};

  let query = `insert into ${tableName} (${Object.keys(value).join(
    " ,"
  )}) values (${Object.values(value).join(" ,")});`;

  let result = await db.execute(sql.raw(query));

  return res.status(200).json(result);
};

export default addRow;
