// import { Client } from "pg";
// import { DB_URL } from "../config";
import {client} from '../index'

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
// const client = new Client({ connectionString: DB_URL });
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
//   await client.connect();
  await client.query(`
        CREATE TABLE IF NOT EXISTS todos(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            title VARCHAR(255) NOT NULL,
            description TEXT,
            done BOOLEAN DEFAULT false
        )
    `);
  const insertQuery =
    "INSERT INTO todos(user_id,title,description) VALUES($1,$2,$3) RETURNING *";
  const values = [userId, title, description];
  const result = await client.query(insertQuery, values);
  return result.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    // await client.connect();
  const updateQuery = "UPDATE todos SET done= true WHERE id=$1 RETURNING *";
  const result=await client.query(updateQuery,[todoId])
  return result.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    // await client.connect();
    const getQuery="SELECT * from todos WHERE user_id=$1";
    const result=await client.query(getQuery,[userId]);
    return result.rows;
}
