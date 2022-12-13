//importing the environment variable
require("dotenv").config();
//importing express
const express = require("express");
//importing db
const db = require("./Database");
//https or http request
const request = require("request");
//creating an instance of express app
const app = express(); // app is the variable of the instance express

// Middleware setup
/**using morgan middel express function */
app.use(express.json());

const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
const weatherApiKey = "76c6c002ca4341f041228ef68abfd1bd";


// POST endpoint to receive and store the incident report

const port = process.env.PORT || 9000;

// POST endpoint to receive and store the incident report
app.post("/incidents", (req, res) => {
  // Get the incident data from the request body
  const { client_id, incident_desc, city, country } = req.body;

  // Get the current date
  const date = new Date();

  // Get the weather data for the given city
  request(
    `${weatherApiUrl}?q=${city},${country}&appid=${weatherApiKey}`,
    async (error, response, body) => {
      if (error) {
        // If there was an error, return a server error response
        res.status(500).send({ error: "Error getting weather data" });
        return;
      }

      // Parse the response body
      const weatherData = JSON.parse(body);

      try {
        // Insert the incident data into the "incidents" table in the database
        await db.query(
          "INSERT INTO incidents (client_id, incident_desc, city, country, date, weather_report) VALUES ($1, $2, $3, $4, $5, $6)",
          [client_id, incident_desc, city, country, date, weatherData]
        );
        res.status(201).json({
          status: "success",
        });
      } catch (error) {
        return res.status(500).send({ error: "Error inserting incident data" });
      }
    }
  );
});


app.get("/incidents/list", async (req, res)=>{
    try {
      //running a query to fetch 
     const results = await db.query("select * from incidents");
     res.status(200).json({
        status: "successful",
        results: results.rows.length,
        data: {
            incidents: results.rows
        },
    });
    } catch (err) {
        console.log(err);
    } 
});
app.get('/api', (req, res) => res.send('Testing this endpoint on the server!!!!'));

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
