import pool from "../config/db.js";

const createUserTable = async () => {
  const queryText = `
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        create_at TIMESTAMP DEFAULT NOW()
    )

    `;

  try {
    pool.query(queryText);
    console.log("User table is created if not exists");
  } catch (error) {
    console.log("Error creating users table : ", error);
  }
};

export default createUserTable;
