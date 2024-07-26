const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const configurations = require('./Databaseconfig');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: 'https://www.winkywebus.online', // Replace with your allowed origin or use a function for dynamic configuration
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, HTTP authentication) across domains
  optionsSuccessStatus: 204, // Set the response status for successful preflight requests
};
app.use(cors(corsOptions));

// Database client setup
const client = new Client(configurations);

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Error connecting to the database:', err));

// Create table function
async function createTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Emails_tbl_awesome (
        ID SERIAL PRIMARY KEY,
        fullNames VARCHAR(255) NOT NULL,
        contact VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL
      )
    `;
    await client.query(createTableQuery);
    console.log("Table created successfully");
  } catch (err) {
    console.error('Error creating table:', err);
  }
}

// Insert email function
async function insertEmailToDatabase({ fullNames, contact, email, message }) {
  try {
    const insertQuery = `
      INSERT INTO Emails_tbl_awesome (fullNames, contact, email, message)
      VALUES ($1, $2, $3, $4)
    `;
    const insertValues = [fullNames, contact, email, message];
    await client.query(insertQuery, insertValues);
    console.log("Email added successfully");
  } catch (err) {
    console.error('Error inserting email:', err);
  }
}
// Delete table function
async function deleteTable() {
  try {
    const deleteTableQuery = 'DROP TABLE IF EXISTS Emails_tbl_awesome';
    await client.query(deleteTableQuery);
    console.log("Table deleted successfully");
  } catch (err) {
    console.error('Error deleting table:', err);
  }
}
// Routes
app.post('/', async (req, res) => {
  try {
   // deleteTable()
   await createTable(); // Ensure the table exists
    await insertEmailToDatabase(req.body); // Insert data into the table
    
    // Get all data
    const allEmailsQuery = "SELECT * FROM Emails_tbl_awesome";
    const result = await client.query(allEmailsQuery);
    
    // Send response
    res.status(201).json(result.rows);
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/', (req, res) => {
  try {
    res.send("ohhhh my!!!");
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(4000, (error) => {
  if (error) {
    console.error('Error starting server:', error);
    process.exit(1); // Exit the process with an error code
  }
  console.log('Listening on port 4000');
});
