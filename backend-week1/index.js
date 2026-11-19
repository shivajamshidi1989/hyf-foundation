import express from "express";
import knex from "knex";
import path from "node:path";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

async function setupDatabase() {
  const exists = await db.schema.hasTable("users");

  if (!exists) {
    await db.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
    });

    await db("users").insert([
      { name: "Shiva", email: "shiva@test.com" },
      { name: "Hesam", email: "hesam@test.com" },
      { name: "Ali", email: "ali@test.com" },
    ]);
  }

  console.log("Database is ready!");
}

setupDatabase().catch(console.error);

const app = express();

app.get("/", (request, response) => {
  response.sendFile(path.resolve("index.html"));
});

app.get("/index.css", (request, response) => {
  response.sendFile(path.resolve("index.css"));
});

// app.get("/", (request, response) => {
//   response.status(200).send("hello world!");
// });

app.get("/hello", (request, response) => {
  response.status(200).json({
    message: "Hello from my backend!",
    language: "English",
  });
});

app.get("/users/:id", (request, response) => {
  const userId = request.params.id;

  response.status(200).json({
    id: userId,
    message: `You requested user ${userId}`,
  });
});

app.get("/products", (request, response) => {
  const products = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Phone", price: 3000 },
    { id: 3, name: "Headphones", price: 500 },
  ];

  response.status(200).json(products);
});

app.get("/user-count", async (request, response) => {
  try {
    const result = await db("users").count("* as count");

    response.status(200).json({
      count: result[0].count,
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      error: "Failed to count users",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
