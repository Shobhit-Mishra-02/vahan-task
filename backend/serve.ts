import app from "./app";
import * as dotenv from "dotenv";
import { client } from "./db/connection";

async function connect() {
  await client.connect();
  console.log("Connected to the database");
}

dotenv.config();

const port = process.env.PORT || 5000;

connect().then(() => {
  app.listen(port, () => {
    console.log("The server is running of localhost:" + port);
  });
});
