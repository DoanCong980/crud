import knex from "knex";
const builder = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "Test-App",
    password: "123456789",
    database: "postgres", // Tự điền thông tin của DB mà bạn cài vào
  },
  pool: { min: 0, max: 7 }, // connectionpool có tối đa 7 connection trong 1 lúc.
});
export default builder;
// FILE: index.js
import queryBuilder from "./db.js";
export { queryBuilder };
