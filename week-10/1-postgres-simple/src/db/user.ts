import { Client } from "pg";
import { DB_URL } from "../config";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
// console.log(DB_URL);

const client = new Client({ connectionString: DB_URL });
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        name VARCHAR(50) NOT NULL
    );
  `);
  const insertQuery =
    "INSERT INTO users(username,password,name) VALUES($1,$2,$3)";
  const values = [username, password, name];
  const res = await client.query(insertQuery, values);
  return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
//   await client.connect();
  const getQuery = "SELECT * from users WHERE id=$1";
  const values = [userId];
  const res = await client.query(getQuery, values);
  return res.rows[0];
}
