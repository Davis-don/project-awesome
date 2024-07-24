const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use CORS middleware with default options (allows all origins)
// app.use(cors());






const corsOptions = {
  origin: 'http://localhost:3000', // Ensure no trailing slash
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, HTTP authentication) across domains
  optionsSuccessStatus: 204, // Set the response status for successful preflight requests
  allowedHeaders: 'Content-Type,Authorization' // Allow these headers
};

app.use(cors(corsOptions));



app.get('/', (req, res) => {
  try {
    res.send("ohhhh my!!!"); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error"); 
  }
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Post request received');
});

app.listen(4000, (error) => {
  if (error) {
    console.error(error);
    process.exit(1); // Exit the process with an error code
  }
  console.log('Listening on port 4000');
});

