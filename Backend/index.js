const express = require('express');
const cors = require('cors');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const corsOptions = {
  origin: 'https://project-awesome-client.vercel.app', // Replace with your allowed origin or use a function for dynamic configuration
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, HTTP authentication) across domains
  optionsSuccessStatus: 204, // Set the response status for successful preflight requests
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

